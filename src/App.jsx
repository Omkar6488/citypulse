import { useState, useEffect, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

// ── CONFIG ────────────────────────────────────────────────────────────────────
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
const API = `${API_BASE_URL}/api`;

async function apiFetch(path, opts = {}) {
  try {
    const res = await fetch(`${API}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...opts,
    });
    return await res.json();
  } catch {
    return null;
  }
}

// ── FALLBACK DATA (shown when backend is offline) ─────────────────────────────
const FALLBACK_COMPLAINTS = [
  { ticket_id:"CP-2847", issue_type:"Pothole",             location:"FC Road, Shivajinagar",  severity:9,  status:"Critical",    department:"PWD",        created_at:"2 mins ago" },
  { ticket_id:"CP-2846", issue_type:"Streetlight Failure", location:"Baner Road, Baner",       severity:6,  status:"In Progress", department:"Electricity", created_at:"8 mins ago" },
  { ticket_id:"CP-2845", issue_type:"Waterlogging",        location:"Swargate Circle",          severity:8,  status:"Critical",    department:"Water Board", created_at:"15 mins ago" },
  { ticket_id:"CP-2844", issue_type:"Garbage Overflow",    location:"Hadapsar, Magarpatta",     severity:5,  status:"Pending",     department:"Sanitation",  created_at:"22 mins ago" },
  { ticket_id:"CP-2843", issue_type:"Road Cave-in",        location:"Kothrud, Paud Road",       severity:10, status:"Critical",    department:"PWD",         created_at:"31 mins ago" },
  { ticket_id:"CP-2842", issue_type:"Broken Footpath",     location:"JM Road, Deccan",          severity:4,  status:"Resolved",    department:"PWD",         created_at:"1 hr ago" },
  { ticket_id:"CP-2841", issue_type:"Water Pipe Burst",    location:"Wakad, Hinjewadi",         severity:9,  status:"In Progress", department:"Water Board", created_at:"1.5 hrs ago" },
  { ticket_id:"CP-2840", issue_type:"Pothole",             location:"Viman Nagar, Nagar Rd",    severity:7,  status:"Pending",     department:"PWD",         created_at:"2 hrs ago" },
];
const FALLBACK_DEPT = [
  { department:"PWD",         total:254, pending:142, resolved:89,  critical:23 },
  { department:"Water Board", total:171, pending:67,  resolved:104, critical:14 },
  { department:"Electricity", total:239, pending:38,  resolved:201, critical:5  },
  { department:"Sanitation",  total:172, pending:95,  resolved:77,  critical:8  },
  { department:"Transport",   total:185, pending:29,  resolved:156, critical:2  },
];
const FALLBACK_SUMMARY = { total:4712, active:7, critical:3, resolved:3204, resolution_rate:68, avg_resolution_hours:18.4 };
const TREND_DATA = [
  {hour:"06:00",count:12},{hour:"08:00",count:47},{hour:"10:00",count:89},
  {hour:"12:00",count:134},{hour:"14:00",count:98},{hour:"16:00",count:156},
  {hour:"18:00",count:201},{hour:"20:00",count:167},{hour:"22:00",count:73},
];
const PIE_COLORS = ["#ef4444","#06b6d4","#f59e0b","#10b981","#6366f1","#ec4899"];
const ISSUE_TYPES = ["Pothole","Streetlight Failure","Waterlogging","Garbage Overflow","Road Cave-in","Broken Footpath","Water Pipe Burst","Illegal Dumping","Tree Fallen","Sewage Overflow"];
const MAP_POINTS = [
  { ticket_id:"CP-2847", issue_type:"Pothole",             latitude:18.5314, longitude:73.8446, severity:9,  status:"Critical"    },
  { ticket_id:"CP-2846", issue_type:"Streetlight Failure", latitude:18.5590, longitude:73.7868, severity:6,  status:"In Progress" },
  { ticket_id:"CP-2845", issue_type:"Waterlogging",        latitude:18.5020, longitude:73.8610, severity:8,  status:"Critical"    },
  { ticket_id:"CP-2844", issue_type:"Garbage Overflow",    latitude:18.5092, longitude:73.9272, severity:5,  status:"Pending"     },
  { ticket_id:"CP-2843", issue_type:"Road Cave-in",        latitude:18.5054, longitude:73.8074, severity:10, status:"Critical"    },
  { ticket_id:"CP-2841", issue_type:"Water Pipe Burst",    latitude:18.5930, longitude:73.7590, severity:9,  status:"In Progress" },
  { ticket_id:"CP-2840", issue_type:"Pothole",             latitude:18.5670, longitude:73.9120, severity:7,  status:"Pending"     },
];

// ── STYLES ────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --black:#080c14;--dark:#0d1520;--card:#111d2e;--cardB:#162030;
    --border:#1e3048;--cyan:#06b6d4;--cyanD:#0891b2;
    --amber:#f59e0b;--green:#10b981;--red:#ef4444;--indigo:#6366f1;
    --white:#f0f9ff;--muted:#64748b;--text:#cbd5e1;
  }
  body{background:var(--black);font-family:'DM Sans',sans-serif;color:var(--text);overflow-x:hidden;}
  ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:var(--dark);} ::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}

  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(8,12,20,0.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 24px;height:56px;}
  .nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:20px;color:var(--white);}
  .nav-logo span{color:var(--cyan);}
  .nav-tabs{display:flex;gap:4px;}
  .nav-tab{padding:6px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;border:none;background:transparent;color:var(--muted);transition:all 0.2s;font-family:'DM Sans',sans-serif;}
  .nav-tab:hover{color:var(--white);background:var(--card);}
  .nav-tab.active{background:var(--cyan);color:#000;font-weight:600;}
  .nav-right{display:flex;align-items:center;gap:16px;}
  .live-badge{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--green);font-weight:500;}
  .live-dot{width:7px;height:7px;background:var(--green);border-radius:50%;animation:pulse 2s infinite;}
  .api-badge{font-size:10px;padding:3px 8px;border-radius:4px;font-weight:600;}
  .api-online{background:rgba(16,185,129,0.15);color:var(--green);border:1px solid rgba(16,185,129,0.3);}
  .api-offline{background:rgba(239,68,68,0.1);color:#ef4444;border:1px solid rgba(239,68,68,0.2);}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}

  .main{padding-top:56px;min-height:100vh;}
  .view{padding:24px;animation:fadeIn 0.3s ease;}
  @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

  .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;}
  .stat-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;position:relative;overflow:hidden;transition:border-color 0.2s,transform 0.2s;cursor:default;}
  .stat-card:hover{transform:translateY(-2px);border-color:var(--accent-color);}
  .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent-color);}
  .stat-val{font-family:'Syne',sans-serif;font-size:32px;font-weight:800;color:var(--white);line-height:1;}
  .stat-lbl{font-size:11px;color:var(--muted);margin-top:6px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;}
  .stat-delta{font-size:11px;margin-top:8px;color:var(--muted);}

  .grid-main{display:grid;grid-template-columns:1.6fr 1fr;gap:16px;margin-bottom:16px;}
  .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
  .card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;}
  .card-title{font-family:'Syne',sans-serif;font-size:13px;font-weight:700;color:var(--white);margin-bottom:16px;display:flex;align-items:center;gap:8px;}
  .dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;}

  /* MAP */
  .map-area{background:var(--cardB);border-radius:8px;position:relative;overflow:hidden;height:290px;background-image:radial-gradient(circle at 30% 50%,rgba(6,182,212,.04) 0%,transparent 60%);}
  .map-grid{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:38px 38px;opacity:.35;}
  .map-dot{position:absolute;width:11px;height:11px;border-radius:50%;transform:translate(-50%,-50%);cursor:pointer;transition:transform .15s;}
  .map-dot:hover{transform:translate(-50%,-50%) scale(1.6);}
  .map-ring{position:absolute;inset:-5px;border-radius:50%;border:2px solid currentColor;opacity:.35;animation:ring 2s infinite;}
  @keyframes ring{0%{transform:scale(1);opacity:.35}100%{transform:scale(2.5);opacity:0}}
  .map-tooltip{position:absolute;background:rgba(8,12,20,.92);border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:10px;white-space:nowrap;pointer-events:none;z-index:10;transform:translate(-50%,-120%);}
  .map-legend{position:absolute;bottom:10px;left:10px;display:flex;gap:10px;flex-wrap:wrap;}
  .map-legend-item{display:flex;align-items:center;gap:5px;font-size:9.5px;color:var(--muted);}

  /* PIE */
  .pie-legend{display:flex;flex-direction:column;gap:7px;margin-top:8px;}
  .pie-legend-row{display:flex;align-items:center;justify-content:space-between;font-size:11px;}

  /* DEPT BARS */
  .dept-list{display:flex;flex-direction:column;gap:12px;}
  .dept-header-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;}
  .dept-track{height:5px;background:var(--border);border-radius:3px;overflow:hidden;}
  .dept-bar{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--red),var(--amber));transition:width 1s ease;}

  /* FEED */
  .feed-header{display:grid;grid-template-columns:88px 1.2fr 1fr 72px 100px 76px;gap:12px;padding:5px 12px;margin-bottom:6px;}
  .feed-col-h{font-size:9.5px;font-weight:700;color:var(--border);text-transform:uppercase;letter-spacing:.06em;}
  .feed-list{display:flex;flex-direction:column;gap:6px;}
  .feed-row{display:grid;grid-template-columns:88px 1.2fr 1fr 72px 100px 76px;align-items:center;gap:12px;padding:9px 12px;background:var(--cardB);border-radius:8px;border:1px solid var(--border);font-size:12px;cursor:pointer;transition:border-color .15s;}
  .feed-row:hover{border-color:var(--cyan);}
  .feed-id{font-family:'Syne',sans-serif;font-weight:700;color:var(--cyan);font-size:10.5px;}
  .feed-type{font-weight:600;color:var(--white);}
  .feed-loc{color:var(--muted);font-size:11px;}

  .badge{padding:3px 9px;border-radius:20px;font-size:10px;font-weight:600;display:inline-flex;align-items:center;}
  .b-critical{background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.3);}
  .b-progress{background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3);}
  .b-pending{background:rgba(100,116,139,.15);color:#94a3b8;border:1px solid rgba(100,116,139,.3);}
  .b-resolved{background:rgba(16,185,129,.15);color:#10b981;border:1px solid rgba(16,185,129,.3);}

  .sev-wrap{display:flex;align-items:center;gap:5px;}
  .sev-track{flex:1;height:3px;background:var(--border);border-radius:2px;}
  .sev-fill{height:100%;border-radius:2px;}
  .sev-num{font-size:10.5px;font-weight:700;min-width:14px;text-align:right;}

  /* FORM */
  .form-wrap{max-width:860px;margin:0 auto;}
  .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .fg{display:flex;flex-direction:column;gap:6px;}
  .fg.full{grid-column:1/-1;}
  .flabel{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;}
  .finput,.fselect,.ftextarea{background:var(--cardB);border:1px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--white);font-family:'DM Sans',sans-serif;font-size:14px;transition:border-color .2s;outline:none;width:100%;}
  .finput:focus,.fselect:focus,.ftextarea:focus{border-color:var(--cyan);}
  .fselect option{background:var(--dark);}
  .ftextarea{resize:vertical;min-height:80px;}
  .upload-zone{border:2px dashed var(--border);border-radius:8px;padding:28px;text-align:center;cursor:pointer;transition:all .2s;background:var(--cardB);}
  .upload-zone:hover{border-color:var(--cyan);background:rgba(6,182,212,.03);}
  .btn-primary{background:linear-gradient(135deg,var(--cyan),var(--cyanD));color:#000;border:none;padding:12px 32px;border-radius:8px;font-family:'Syne',sans-serif;font-weight:700;font-size:15px;cursor:pointer;transition:all .2s;width:100%;}
  .btn-primary:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(6,182,212,.3);}
  .btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none;}

  /* AI PANEL */
  .ai-panel{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:16px;}
  .ai-header{background:rgba(6,182,212,.07);border-bottom:1px solid var(--border);padding:12px 18px;display:flex;align-items:center;gap:10px;}
  .ai-body{padding:18px;}
  .ai-step{display:flex;gap:12px;align-items:flex-start;padding:8px 0;border-bottom:1px solid rgba(30,48,72,.5);}
  .ai-step:last-child{border:none;padding-bottom:0;}
  .ai-num{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;}
  .ai-num.done{background:rgba(16,185,129,.2);color:var(--green);border:1px solid rgba(16,185,129,.4);}
  .ai-num.active{background:rgba(6,182,212,.2);color:var(--cyan);border:1px solid rgba(6,182,212,.4);}
  .ai-num.wait{background:var(--cardB);color:var(--muted);border:1px solid var(--border);}
  .ai-result-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;}
  .ai-result-card{background:var(--cardB);border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center;}
  .ai-result-val{font-family:'Syne',sans-serif;font-size:18px;font-weight:800;}
  .ai-result-lbl{font-size:10px;color:var(--muted);margin-top:3px;text-transform:uppercase;letter-spacing:.05em;}
  .prog-bar{height:2px;background:var(--border);border-radius:2px;margin-top:6px;overflow:hidden;}
  .prog-fill{height:100%;border-radius:2px;background:var(--cyan);transition:width .8s ease;}

  .confirmed{background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.25);border-radius:12px;padding:24px;text-align:center;margin-top:16px;}
  .confirmed-id{font-family:'Syne',sans-serif;font-size:26px;font-weight:800;color:var(--green);}

  @media(max-width:900px){
    .stats-row,.grid-main,.grid-2{grid-template-columns:1fr;}
    .form-grid{grid-template-columns:1fr;}
    .ai-result-grid{grid-template-columns:repeat(2,1fr);}
    .feed-header,.feed-row{grid-template-columns:80px 1fr 80px 60px;}
  }
`;

// ── HELPERS ───────────────────────────────────────────────────────────────────
const sevColor = s => s >= 9 ? "#ef4444" : s >= 7 ? "#f59e0b" : s >= 5 ? "#06b6d4" : "#10b981";
const badgeClass = st => ({ Critical:"badge b-critical", "In Progress":"badge b-progress", Pending:"badge b-pending", Resolved:"badge b-resolved" }[st] || "badge b-pending");
const fmt = v => v ?? "—";

// ── MAP ───────────────────────────────────────────────────────────────────────
function CityMap({ points }) {
  const [hovered, setHovered] = useState(null);
  const bounds = { minLat:18.49, maxLat:18.61, minLng:73.74, maxLng:73.95 };
  const toXY = (lat, lng) => ({
    x: ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100,
    y: (1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 100,
  });
  return (
    <div className="map-area">
      <div className="map-grid" />
      <div style={{ position:"absolute", top:10, left:10, fontFamily:"'Syne',sans-serif", fontSize:10, fontWeight:700, color:"#334155", letterSpacing:".1em" }}>PUNE — LIVE MAP</div>
      {points.map((p, i) => {
        const { x, y } = toXY(p.latitude, p.longitude);
        const col = sevColor(p.severity);
        return (
          <div key={p.ticket_id} style={{ position:"absolute", left:`${x}%`, top:`${y}%` }}
            onMouseEnter={() => setHovered(p)} onMouseLeave={() => setHovered(null)}>
            <div className="map-dot" style={{ background:col, boxShadow:`0 0 8px ${col}80`, color:col }}>
              <div className="map-ring" style={{ borderColor:col }} />
            </div>
            {hovered?.ticket_id === p.ticket_id && (
              <div className="map-tooltip">
                <strong style={{ color:col }}>{p.issue_type}</strong><br />
                {p.location || p.ticket_id} · Sev {p.severity}
              </div>
            )}
          </div>
        );
      })}
      <div className="map-legend">
        {[["#ef4444","Critical"],["#f59e0b","High"],["#06b6d4","Medium"],["#10b981","Low"]].map(([c,l]) => (
          <div key={l} className="map-legend-item">
            <div style={{ width:7, height:7, borderRadius:"50%", background:c }} />{l}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard({ apiOnline }) {
  const [complaints, setComplaints] = useState(FALLBACK_COMPLAINTS);
  const [summary, setSummary]       = useState(FALLBACK_SUMMARY);
  const [deptData, setDeptData]     = useState(FALLBACK_DEPT);
  const [pieData, setPieData]       = useState([]);
  const [mapPoints, setMapPoints]   = useState(MAP_POINTS);
  const [trend, setTrend]           = useState(TREND_DATA);

  const load = useCallback(async () => {
    if (!apiOnline) return;
    const [s, d, c, p, m, t] = await Promise.all([
      apiFetch("/analytics/summary"),
      apiFetch("/analytics/by-department"),
      apiFetch("/complaints/?limit=10"),
      apiFetch("/analytics/by-issue-type"),
      apiFetch("/analytics/map-points"),
      apiFetch("/analytics/recent-trend"),
    ]);
    if (s) setSummary(s);
    if (d?.departments) setDeptData(d.departments);
    if (c?.complaints)  setComplaints(c.complaints);
    if (p?.breakdown)   setPieData(p.breakdown.map((x, i) => ({ ...x, color: PIE_COLORS[i % PIE_COLORS.length] })));
    if (m?.points)      setMapPoints(m.points);
    if (t?.trend)       setTrend(t.trend.map(x => ({ hour: x.hour, count: x.count })));
  }, [apiOnline]);

  useEffect(() => { load(); const id = setInterval(load, 15000); return () => clearInterval(id); }, [load]);

  const pie = pieData.length ? pieData : [
    { category:"Pothole / Road", count:38, color:"#ef4444" },
    { category:"Water / Drainage", count:24, color:"#06b6d4" },
    { category:"Electricity", count:18, color:"#f59e0b" },
    { category:"Sanitation", count:13, color:"#10b981" },
    { category:"Other", count:7, color:"#6366f1" },
  ];

  const TT = ({ active, payload, label }) => active && payload?.length ? (
    <div style={{ background:"#111d2e", border:"1px solid #1e3048", borderRadius:8, padding:"8px 12px", fontSize:12 }}>
      <div style={{ color:"#94a3b8", marginBottom:3 }}>{label}</div>
      <div style={{ color:"#06b6d4", fontWeight:700 }}>{payload[0].value}</div>
    </div>
  ) : null;

  return (
    <div className="view">
      {/* STATS */}
      <div className="stats-row">
        {[
          { val:summary.active,          lbl:"Active Complaints",  col:"#ef4444", delta:`${summary.critical} critical` },
          { val:summary.critical,        lbl:"Critical Issues",    col:"#f59e0b", delta:"Needs immediate action" },
          { val:summary.total?.toLocaleString(), lbl:"Total Today", col:"#06b6d4", delta:`${summary.resolution_rate}% resolution rate` },
          { val:`${summary.avg_resolution_hours}h`, lbl:"Avg Resolution", col:"#10b981", delta:"Target: 12h" },
        ].map((s, i) => (
          <div key={i} className="stat-card" style={{ "--accent-color":s.col }}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-delta">{s.delta}</div>
          </div>
        ))}
      </div>

      {/* MAP + PIE */}
      <div className="grid-main">
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#06b6d4" }} />Live Complaint Heat Map — Pune</div>
          <CityMap points={mapPoints} />
        </div>
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#f59e0b" }} />Issue Breakdown</div>
          <ResponsiveContainer width="100%" height={175}>
            <PieChart>
              <Pie data={pie} cx="50%" cy="50%" innerRadius={42} outerRadius={70} paddingAngle={3} dataKey="count">
                {pie.map((d, i) => <Cell key={i} fill={d.color} stroke="transparent" />)}
              </Pie>
              <Tooltip contentStyle={{ background:"#111d2e", border:"1px solid #1e3048", borderRadius:8, fontSize:12 }} formatter={(v, n, p) => [v, p.payload.category]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {pie.slice(0,5).map(d => (
              <div key={d.category} className="pie-legend-row">
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <div style={{ width:7, height:7, borderRadius:"50%", background:d.color }} />
                  <span style={{ color:"#cbd5e1", fontSize:11 }}>{d.category}</span>
                </div>
                <span style={{ color:d.color, fontWeight:700, fontSize:11 }}>{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TREND + DEPT */}
      <div className="grid-2">
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#10b981" }} />Complaint Volume — Today</div>
          <ResponsiveContainer width="100%" height={155}>
            <LineChart data={trend}>
              <XAxis dataKey="hour" tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<TT />} />
              <Line type="monotone" dataKey="count" stroke="#06b6d4" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#ef4444" }} />Department Load</div>
          <div className="dept-list">
            {deptData.map(d => {
              const pct = d.total ? Math.round((d.pending / d.total) * 100) : 0;
              return (
                <div key={d.department}>
                  <div className="dept-header-row">
                    <span style={{ fontWeight:600, color:"#f0f9ff", fontSize:12 }}>{d.department}</span>
                    <span style={{ color:"#64748b", fontSize:11 }}>{d.pending} pending · {d.critical} critical</span>
                  </div>
                  <div className="dept-track"><div className="dept-bar" style={{ width:`${pct}%` }} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* LIVE FEED */}
      <div className="card">
        <div className="card-title" style={{ justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div className="dot" style={{ background:"#6366f1" }} />Live Complaint Feed
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:11, color:"#64748b" }}>
            <div className="live-dot" />Auto-refresh 15s
          </div>
        </div>
        <div className="feed-header">
          {["ID","Type · Location","Department","Severity","Status","Time"].map(h => (
            <div key={h} className="feed-col-h">{h}</div>
          ))}
        </div>
        <div className="feed-list">
          {complaints.map(c => (
            <div key={c.ticket_id} className="feed-row">
              <div className="feed-id">{c.ticket_id}</div>
              <div>
                <div className="feed-type">{c.issue_type}</div>
                <div className="feed-loc">{c.location}</div>
              </div>
              <div style={{ fontSize:11, color:"#94a3b8" }}>{c.department}</div>
              <div className="sev-wrap">
                <div className="sev-track"><div className="sev-fill" style={{ width:`${(c.severity||5)*10}%`, background:sevColor(c.severity||5) }} /></div>
                <div className="sev-num" style={{ color:sevColor(c.severity||5) }}>{c.severity}</div>
              </div>
              <div><span className={badgeClass(c.status)}>{c.status}</span></div>
              <div style={{ fontSize:10, color:"#64748b" }}>{c.created_at?.split("T")[1]?.slice(0,5) || c.created_at}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CITIZEN PORTAL ────────────────────────────────────────────────────────────
function CitizenPortal({ apiOnline }) {
  const [form, setForm]       = useState({ name:"", phone:"", issue_type:"", location:"", description:"" });
  const [step, setStep]       = useState("idle");
  const [aiStep, setAiStep]   = useState(0);
  const [result, setResult]   = useState(null);
  const [ticketId, setTicketId] = useState("");
  const [trackId, setTrackId]   = useState("");
  const [tracking, setTracking] = useState(null);

  const submit = async () => {
    if (!form.issue_type || !form.location) return;
    setStep("processing"); setAiStep(0);

    const steps = [700, 900, 800, 600];
    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, steps[i]));
      setAiStep(i + 1);
    }

    let ai = null;
    if (apiOnline) {
      // First triage preview
      const t = await apiFetch("/complaints/triage", { method:"POST", body: JSON.stringify({ issue_type: form.issue_type, description: form.description }) });
      if (t?.triage) ai = t.triage;

      // Then actually submit
      const res = await apiFetch("/complaints/", { method:"POST", body: JSON.stringify(form) });
      if (res?.ticket_id) { setTicketId(res.ticket_id); ai = res.triage || ai; }
    }

    // Fallback AI result if offline
    if (!ai) {
      const map = {
        "Pothole":            { category:"Road & Infrastructure",      department:"PWD",         severity:8, priority:"HIGH",     sla_hours:48, confidence:96.5 },
        "Streetlight Failure":{ category:"Electrical Infrastructure",  department:"Electricity", severity:6, priority:"MEDIUM",   sla_hours:72, confidence:98.2 },
        "Waterlogging":       { category:"Drainage & Flood Control",   department:"Water Board", severity:9, priority:"CRITICAL",  sla_hours:12, confidence:94.1 },
        "Road Cave-in":       { category:"Road & Infrastructure",      department:"PWD",         severity:10,priority:"CRITICAL",  sla_hours:6,  confidence:95.9 },
        "Water Pipe Burst":   { category:"Water Supply",               department:"Water Board", severity:9, priority:"CRITICAL",  sla_hours:6,  confidence:95.0 },
        "Garbage Overflow":   { category:"Sanitation & Waste",         department:"Sanitation",  severity:5, priority:"MEDIUM",    sla_hours:24, confidence:97.8 },
      };
      ai = map[form.issue_type] || { category:"General Infrastructure", department:"Municipal Corp", severity:5, priority:"MEDIUM", sla_hours:72, confidence:82.0 };
      setTicketId(`CP-${Math.random().toString(36).slice(2,8).toUpperCase()}`);
    }

    setResult(ai); setStep("done");
  };

  const trackComplaint = async () => {
    if (!trackId) return;
    if (apiOnline) {
      const res = await apiFetch(`/complaints/track/${trackId}`);
      if (res?.tracking) return setTracking(res.tracking);
    }
    setTracking({ ticket_id:trackId, status:"Demo mode — connect backend to track live", issue_type:"—", department:"—", priority:"—" });
  };

  const reset = () => { setForm({ name:"",phone:"",issue_type:"",location:"",description:"" }); setStep("idle"); setResult(null); };

  const AI_STEPS = [
    { l:"Text received",       d:"Complaint text parsed & tokenised" },
    { l:"NLP Classification",  d:"indic-BERT running classification..." },
    { l:"Severity Scoring",    d:"Calculating score on 1–10 scale" },
    { l:"Department Routing",  d:"Matching to correct city dept API" },
    { l:"SLA Assignment",      d:"Priority queue assigned — ticket created" },
  ];

  return (
    <div className="view form-wrap">
      <div style={{ marginBottom:24 }}>
        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:"#f0f9ff" }}>File a Civic Complaint</div>
        <div style={{ fontSize:13, color:"#64748b", marginTop:4 }}>AI triages and routes your complaint to the right department in seconds.</div>
      </div>

      {step === "idle" && (
        <>
          <div className="card">
            <div className="form-grid">
              <div className="fg">
                <label className="flabel">Your Name</label>
                <input className="finput" placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />
              </div>
              <div className="fg">
                <label className="flabel">Phone Number</label>
                <input className="finput" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} />
              </div>
              <div className="fg">
                <label className="flabel">Issue Type *</label>
                <select className="fselect" value={form.issue_type} onChange={e => setForm({...form, issue_type:e.target.value})}>
                  <option value="">Select issue type...</option>
                  {ISSUE_TYPES.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="fg">
                <label className="flabel">Location *</label>
                <input className="finput" placeholder="FC Road, Shivajinagar, Pune" value={form.location} onChange={e => setForm({...form, location:e.target.value})} />
              </div>
              <div className="fg full">
                <label className="flabel">Description</label>
                <textarea className="ftextarea" placeholder="Size, duration, safety risk — more detail helps the AI score severity accurately." value={form.description} onChange={e => setForm({...form, description:e.target.value})} />
              </div>
              <div className="fg full">
                <label className="flabel">Photo (optional)</label>
                <div className="upload-zone">
                  <div style={{ fontSize:26, marginBottom:6 }}>📷</div>
                  <div style={{ fontSize:13, color:"#64748b" }}>Drag & drop or click to upload</div>
                  <div style={{ fontSize:11, color:"#334155", marginTop:4 }}>JPG, PNG up to 10MB</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop:20 }}>
              <button className="btn-primary" onClick={submit} disabled={!form.issue_type || !form.location}>
                Submit — AI Triages Instantly ⚡
              </button>
            </div>
          </div>

          {/* Track existing */}
          <div className="card" style={{ marginTop:16 }}>
            <div className="card-title"><div className="dot" style={{ background:"#f59e0b" }} />Track Existing Complaint</div>
            <div style={{ display:"flex", gap:10 }}>
              <input className="finput" placeholder="Enter ticket ID e.g. CP-2847" value={trackId} onChange={e => setTrackId(e.target.value.toUpperCase())} style={{ flex:1 }} />
              <button onClick={trackComplaint} style={{ padding:"10px 20px", background:"transparent", border:"1px solid var(--cyan)", color:"var(--cyan)", borderRadius:8, cursor:"pointer", fontWeight:600, fontSize:13, fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap" }}>Track →</button>
            </div>
            {tracking && (
              <div style={{ marginTop:14, background:"var(--cardB)", borderRadius:8, padding:14, display:"flex", flexWrap:"wrap", gap:20 }}>
                {[["Ticket",tracking.ticket_id],["Status",tracking.status],["Issue",tracking.issue_type],["Department",tracking.department],["Priority",tracking.priority]].map(([k,v]) => (
                  <div key={k}><div style={{ fontSize:10, color:"#64748b", textTransform:"uppercase", letterSpacing:".05em" }}>{k}</div><div style={{ color:"#f0f9ff", fontWeight:600, marginTop:2, fontSize:13 }}>{v}</div></div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {(step === "processing" || step === "done") && (
        <>
          <div className="card" style={{ marginBottom:14 }}>
            <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
              {[["Issue",form.issue_type],["Location",form.location],form.name && ["Filed by",form.name]].filter(Boolean).map(([k,v]) => (
                <div key={k}><div style={{ fontSize:10, color:"#64748b", textTransform:"uppercase" }}>{k}</div><div style={{ color:"#f0f9ff", fontWeight:600, marginTop:2 }}>{v}</div></div>
              ))}
            </div>
          </div>
          <div className="ai-panel">
            <div className="ai-header">
              <span style={{ fontSize:15 }}>🤖</span>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, color:"var(--cyan)", fontSize:13 }}>AI Triage Engine</span>
              {step === "done" && <span style={{ marginLeft:"auto", fontSize:11, color:"var(--green)", fontWeight:600 }}>✓ Complete</span>}
            </div>
            <div className="ai-body">
              {AI_STEPS.map((st, i) => (
                <div key={i} className="ai-step">
                  <div className={`ai-num ${step==="done" || i<aiStep ? "done" : i===aiStep ? "active" : "wait"}`}>
                    {step==="done" || i<aiStep ? "✓" : i+1}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:"#f0f9ff" }}>{st.l}</div>
                    <div style={{ fontSize:11.5, color:"#64748b", marginTop:2 }}>
                      {step==="done" || i<aiStep ? st.d.replace("...","") : i===aiStep ? st.d : "Waiting..."}
                    </div>
                    {i===aiStep && step==="processing" && (
                      <div className="prog-bar"><div className="prog-fill" style={{ width:"65%" }} /></div>
                    )}
                  </div>
                </div>
              ))}
              {step === "done" && result && (
                <div className="ai-result-grid">
                  {[
                    ["Category",    result.category,              "#06b6d4"],
                    ["Department",  result.department,            "#f59e0b"],
                    ["Priority",    result.priority,              result.priority==="CRITICAL"?"#ef4444":result.priority==="HIGH"?"#f59e0b":"#10b981"],
                    ["Severity",    `${result.severity}/10`,      sevColor(result.severity||5)],
                    ["SLA Target",  `${result.sla_hours}h`,       "#10b981"],
                    ["Confidence",  `${result.confidence}%`,      "#6366f1"],
                  ].map(([l,v,c]) => (
                    <div key={l} className="ai-result-card">
                      <div className="ai-result-val" style={{ color:c }}>{v}</div>
                      <div className="ai-result-lbl">{l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {step === "done" && (
            <>
              <div className="confirmed">
                <div style={{ fontSize:36, marginBottom:8 }}>✅</div>
                <div className="confirmed-id">{ticketId}</div>
                <div style={{ fontSize:14, color:"#f0f9ff", marginTop:6, fontWeight:600 }}>Complaint Registered Successfully</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:6 }}>
                  Routed to <strong style={{ color:"#06b6d4" }}>{result?.department}</strong> · SLA: <strong style={{ color:"#10b981" }}>{result?.sla_hours} hours</strong>
                  {form.phone && ` · SMS updates to ${form.phone}`}
                </div>
              </div>
              <button className="btn-primary" style={{ marginTop:14 }} onClick={reset}>File Another Complaint</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

// ── ANALYTICS ─────────────────────────────────────────────────────────────────
function Analytics({ apiOnline }) {
  const [data, setData]     = useState({ summary:FALLBACK_SUMMARY, departments:FALLBACK_DEPT, trend:TREND_DATA, breaches:[] });
  const [period, setPeriod] = useState("Today");

  useEffect(() => {
    if (!apiOnline) return;
    (async () => {
      const [s, d, t, b] = await Promise.all([
        apiFetch("/analytics/summary"),
        apiFetch("/analytics/by-department"),
        apiFetch("/analytics/recent-trend"),
        apiFetch("/analytics/sla-breaches"),
      ]);
      setData({
        summary:     s || FALLBACK_SUMMARY,
        departments: d?.departments || FALLBACK_DEPT,
        trend:       t?.trend || TREND_DATA,
        breaches:    b?.breaches || [],
      });
    })();
  }, [apiOnline]);

  const TT = ({ active, payload, label }) => active && payload?.length ? (
    <div style={{ background:"#111d2e", border:"1px solid #1e3048", borderRadius:8, padding:"8px 12px", fontSize:11 }}>
      <div style={{ color:"#94a3b8", marginBottom:4, fontWeight:600 }}>{label}</div>
      {payload.map(p => <div key={p.dataKey} style={{ color:p.fill||p.stroke, marginTop:2 }}>{p.dataKey}: <strong>{p.value}</strong></div>)}
    </div>
  ) : null;

  const { summary, departments, trend, breaches } = data;

  return (
    <div className="view">
      <div style={{ marginBottom:24, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:"#f0f9ff" }}>Analytics Overview</div>
          <div style={{ fontSize:13, color:"#64748b", marginTop:4 }}>Pune Municipal Corporation · {period}</div>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["Today","This Week","This Month"].map(p => (
            <button key={p} onClick={() => setPeriod(p)} style={{ padding:"5px 13px", borderRadius:6, border:"1px solid var(--border)", background: p===period?"var(--cyan)":"transparent", color: p===period?"#000":"var(--muted)", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>{p}</button>
          ))}
        </div>
      </div>

      <div className="stats-row">
        {[
          { val:summary.total?.toLocaleString(), lbl:"Total Filed",     col:"#06b6d4", delta:`${summary.resolution_rate}% resolution` },
          { val:summary.resolved?.toLocaleString(), lbl:"Resolved",     col:"#10b981", delta:"Closed tickets" },
          { val:summary.active,                  lbl:"Still Active",    col:"#f59e0b", delta:`${breaches.length} SLA breaches` },
          { val:`${summary.avg_resolution_hours}h`, lbl:"Avg Resolution", col:"#ef4444", delta:"Target: 12h" },
        ].map((s, i) => (
          <div key={i} className="stat-card" style={{ "--accent-color":s.col }}>
            <div className="stat-val" style={{ color:s.col }}>{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
            <div className="stat-delta">{s.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#06b6d4" }} />Department Performance</div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={departments} barSize={12}>
              <XAxis dataKey="department" tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<TT />} />
              <Bar dataKey="resolved"    fill="#10b981" radius={[3,3,0,0]} />
              <Bar dataKey="pending"     fill="#ef4444" radius={[3,3,0,0]} />
              <Bar dataKey="critical"    fill="#f59e0b" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display:"flex", gap:16, justifyContent:"center", marginTop:8 }}>
            {[["#10b981","Resolved"],["#ef4444","Pending"],["#f59e0b","Critical"]].map(([c,l]) => (
              <div key={l} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"#94a3b8" }}>
                <div style={{ width:8, height:8, borderRadius:2, background:c }} />{l}
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title"><div className="dot" style={{ background:"#10b981" }} />Complaint Volume — Today</div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={trend}>
              <XAxis dataKey="hour" tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill:"#64748b", fontSize:10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<TT />} />
              <Line type="monotone" dataKey="count" stroke="#06b6d4" strokeWidth={2.5} dot={{ fill:"#06b6d4", r:3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SLA BREACHES */}
      <div className="card">
        <div className="card-title" style={{ justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div className="dot" style={{ background:"#ef4444" }} />SLA Breach Tracker
          </div>
          {breaches.length > 0 && <span className="badge b-critical">{breaches.length} overdue</span>}
        </div>
        {breaches.length === 0 ? (
          <div style={{ padding:"32px", textAlign:"center", color:"#334155", fontSize:13 }}>
            {apiOnline ? "✅ No SLA breaches right now" : "Connect backend to see live SLA breach data"}
          </div>
        ) : (
          <div className="feed-list">
            {breaches.map(b => (
              <div key={b.ticket_id} className="feed-row" style={{ gridTemplateColumns:"88px 1.4fr 1fr 80px 120px" }}>
                <div className="feed-id">{b.ticket_id}</div>
                <div><div className="feed-type">{b.issue_type}</div><div className="feed-loc">{b.location}</div></div>
                <div style={{ fontSize:11, color:"#94a3b8" }}>{b.department}</div>
                <div><span className="badge b-critical">{b.priority}</span></div>
                <div style={{ fontSize:11, color:"#ef4444", fontWeight:600 }}>⚠ {b.hours_elapsed}h elapsed (SLA: {b.sla_hours}h)</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────
import AppRouter from './AppRouter';

export default AppRouter;
