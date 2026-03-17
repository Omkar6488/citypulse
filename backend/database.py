import aiosqlite
import os
import bcrypt

def hash_password(password: str) -> str:
    """Hash password using bcrypt"""
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode(), salt)
    return hashed.decode()

DB_PATH = os.getenv("DB_PATH", "citypulse.db")

async def get_db():
    db = await aiosqlite.connect(DB_PATH)
    db.row_factory = aiosqlite.Row
    try:
        yield db
    finally:
        await db.close()

async def init_db():
    async with aiosqlite.connect(DB_PATH) as db:
        await db.executescript("""
            CREATE TABLE IF NOT EXISTS users (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                name          TEXT NOT NULL,
                email         TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                role          TEXT NOT NULL CHECK(role IN ('citizen', 'official', 'worker')),
                created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS complaints (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                ticket_id   TEXT UNIQUE NOT NULL,
                name        TEXT,
                phone       TEXT,
                issue_type  TEXT NOT NULL,
                location    TEXT NOT NULL,
                description TEXT,
                latitude    REAL,
                longitude   REAL,
                severity    INTEGER DEFAULT 5,
                priority    TEXT DEFAULT 'MEDIUM',
                category    TEXT,
                department  TEXT,
                sla_hours   INTEGER DEFAULT 72,
                status      TEXT DEFAULT 'Pending',
                confidence  REAL DEFAULT 0.0,
                image_path  TEXT,
                created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
                resolved_at DATETIME
            );

            CREATE TABLE IF NOT EXISTS departments (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                name        TEXT UNIQUE NOT NULL,
                contact     TEXT,
                email       TEXT,
                head        TEXT
            );

            CREATE TABLE IF NOT EXISTS status_updates (
                id            INTEGER PRIMARY KEY AUTOINCREMENT,
                complaint_id  INTEGER REFERENCES complaints(id),
                status        TEXT NOT NULL,
                note          TEXT,
                updated_by    TEXT DEFAULT 'System',
                updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        """)

        # Seed demo users
        demo_users = [
            ("Citizen Demo", "citizen@demo.com", "demo123", "citizen"),
            ("Official Demo", "official@demo.com", "demo123", "official"),
            ("Worker Demo", "worker@demo.com", "demo123", "worker"),
        ]
        for name, email, password, role in demo_users:
            pwd_hash = hash_password(password)
            await db.execute("""
                INSERT OR IGNORE INTO users (name, email, password_hash, role)
                VALUES (?, ?, ?, ?)
            """, (name, email, pwd_hash, role))

        # Seed departments
        await db.executemany("""
            INSERT OR IGNORE INTO departments (name, contact, email, head) VALUES (?,?,?,?)
        """, [
            ("PWD",           "+91-20-26123456", "pwd@punecorp.in",       "Suresh Patil"),
            ("Water Board",   "+91-20-24476666", "water@punecorp.in",     "Anjali Desai"),
            ("Electricity",   "+91-20-26056789", "electric@punecorp.in",  "Ramesh Kulkarni"),
            ("Sanitation",    "+91-20-25537890", "sanitation@punecorp.in","Priya Joshi"),
            ("Transport",     "+91-20-26125678", "transport@punecorp.in", "Vikram Singh"),
        ])

        # Seed sample complaints so dashboard isn't empty
        sample_complaints = [
            ("CP-2840", "Rahul M.",  "9876543210", "Pothole",             "FC Road, Shivajinagar",   "Large pothole near coffee shop, ~2ft deep",   18.5314, 73.8446,  9, "CRITICAL", "Road & Infrastructure",      "PWD",         48,  "Critical",   96.5),
            ("CP-2841", "Sneha K.",  "9812345678", "Streetlight Failure", "Baner Road, Baner",        "3 consecutive lights out since last week",    18.5590, 73.7868,  6, "MEDIUM",   "Electrical Infrastructure",  "Electricity", 72,  "In Progress",98.2),
            ("CP-2842", "Amit S.",   "9988776655", "Waterlogging",        "Swargate Circle",           "Road flooded 1 foot after last night rain",  18.5020, 73.8610,  8, "HIGH",     "Drainage & Flood Control",   "Water Board", 12,  "Critical",   94.1),
            ("CP-2843", "Priya D.",  "9765432109", "Garbage Overflow",    "Hadapsar, Magarpatta",      "Overflowing bins, stray animals, smell bad",  18.5092, 73.9272,  5, "MEDIUM",   "Sanitation & Waste",         "Sanitation",  24,  "Pending",    97.8),
            ("CP-2844", "Vinod P.",  "9654321098", "Road Cave-in",        "Kothrud, Paud Road",        "Road surface collapsed near school zone",     18.5054, 73.8074, 10, "CRITICAL", "Road & Infrastructure",      "PWD",         6,   "Critical",   95.9),
            ("CP-2845", "Meera J.",  "9543210987", "Broken Footpath",     "JM Road, Deccan",           "Footpath tiles broken, elderly fall risk",    18.5214, 73.8400,  4, "LOW",      "Road & Infrastructure",      "PWD",         96,  "Resolved",   91.3),
            ("CP-2846", "Suraj N.",  "9432109876", "Water Pipe Burst",    "Wakad, Hinjewadi",          "Major pipe burst, water wasted for 6 hours",  18.5930, 73.7590,  9, "CRITICAL", "Water Supply",               "Water Board", 6,   "In Progress",95.0),
            ("CP-2847", "Kavya R.",  "9321098765", "Pothole",             "Viman Nagar, Nagar Road",   "Pothole caused bike accident this morning",   18.5670, 73.9120,  7, "HIGH",     "Road & Infrastructure",      "PWD",         48,  "Pending",    96.5),
        ]
        for c in sample_complaints:
            await db.execute("""
                INSERT OR IGNORE INTO complaints
                (ticket_id,name,phone,issue_type,location,description,latitude,longitude,
                 severity,priority,category,department,sla_hours,status,confidence)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            """, c)

        await db.commit()
        print("✅ Database initialised with seed data")
