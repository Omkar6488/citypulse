import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function CitizenDashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('file')
  const [complaints, setComplaints] = useState([])
  const [ticketId, setTicketId] = useState('')
  const [trackingInfo, setTrackingInfo] = useState(null)

  useEffect(() => {
    fetchComplaints()
  }, [])

  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('http://localhost:8000/api/complaints/?limit=20', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const data = await res.json()
        setComplaints(data.complaints || [])
      }
    } catch (err) {
      console.error('Failed to fetch complaints:', err)
    }
  }

  const handleTrack = async () => {
    if (!ticketId) return
    try {
      const res = await fetch(`http://localhost:8000/api/complaints/track/${ticketId}`)
      if (res.ok) {
        setTrackingInfo(await res.json())
      } else {
        setTrackingInfo({ error: 'Ticket not found' })
      }
    } catch (err) {
      setTrackingInfo({ error: 'Error tracking complaint' })
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const css = `
    .citizen-dashboard {
      background: #080c14;
      min-height: 100vh;
      color: #cbd5e1;
      font-family: 'DM Sans', sans-serif;
    }

    .dashboard-header {
      background: #0d1520;
      border-bottom: 1px solid #1e3048;
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }

    .header-title span {
      color: #06b6d4;
    }

    .user-info {
      font-size: 13px;
      color: #94a3b8;
    }

    .user-name {
      color: #cbd5e1;
      font-weight: 600;
    }

    .header-right {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #ef4444;
      color: #ef4444;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .dashboard-container {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 32px;
      border-bottom: 1px solid #1e3048;
      padding-bottom: 16px;
    }

    .tab-btn {
      padding: 8px 20px;
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .tab-btn.active {
      color: #06b6d4;
      border-bottom-color: #06b6d4;
    }

    .tab-btn:hover {
      color: #cbd5e1;
    }

    .tab-content {
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .form-group {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .form-input,
    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus {
      border-color: #06b6d4;
    }

    .btn-primary {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .complaints-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .complaint-item {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      display: grid;
      grid-template-columns: 100px 1fr 120px 100px;
      gap: 16px;
      align-items: center;
    }

    .complaint-id {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      color: #06b6d4;
      font-size: 14px;
    }

    .complaint-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .complaint-type {
      font-weight: 600;
      color: #f0f9ff;
      font-size: 14px;
    }

    .complaint-location {
      color: #64748b;
      font-size: 12px;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .status-pending {
      background: rgba(100, 116, 139, 0.2);
      color: #94a3b8;
    }

    .status-progress {
      background: rgba(245, 158, 11, 0.2);
      color: #f59e0b;
    }

    .status-resolved {
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
    }

    .tracking-result {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;
    }

    .tracking-error {
      color: #ef4444;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #64748b;
    }
  `

  const getStatusClass = (status) => {
    if (status === 'Resolved') return 'status-resolved'
    if (status === 'In Progress') return 'status-progress'
    return 'status-pending'
  }

  return (
    <>
      <style>{css}</style>
      <div className="citizen-dashboard">
        <div className="dashboard-header">
          <div className="header-left">
            <div className="header-title">
              City<span>Pulse</span>
            </div>
            <div className="user-info">
              Welcome, <span className="user-name">{user?.name || 'Citizen'}</span>
            </div>
          </div>
          <div className="header-right">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="dashboard-container">
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === 'file' ? 'active' : ''}`}
              onClick={() => setActiveTab('file')}
            >
              📝 File Complaint
            </button>
            <button
              className={`tab-btn ${activeTab === 'track' ? 'active' : ''}`}
              onClick={() => setActiveTab('track')}
            >
              🔍 Track Complaints
            </button>
            <button
              className={`tab-btn ${activeTab === 'nearby' ? 'active' : ''}`}
              onClick={() => setActiveTab('nearby')}
            >
              📍 Nearby Issues
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'file' && (
              <div className="card">
                <div className="card-title">File a New Complaint</div>
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                  Use the "File Complaint" tab in the main CityPulse dashboard
                </p>
                <button className="btn-primary" onClick={() => navigate('/citizen/file')}>
                  Go to File Complaint
                </button>
              </div>
            )}

            {activeTab === 'track' && (
              <div className="card">
                <div className="card-title">Track Your Complaints</div>

                <div className="form-group">
                  <label className="form-label">Ticket ID</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. CP-2847"
                      value={ticketId}
                      onChange={(e) => setTicketId(e.target.value.toUpperCase())}
                      style={{ flex: 1 }}
                    />
                    <button className="btn-primary" onClick={handleTrack}>
                      Track
                    </button>
                  </div>
                </div>

                {trackingInfo && (
                  <div className="tracking-result">
                    {trackingInfo.error ? (
                      <div className="tracking-error">
                        ❌ {trackingInfo.error}
                      </div>
                    ) : (
                      <div>
                        <div style={{ marginBottom: '12px' }}>
                          <strong>Ticket:</strong> {trackingInfo.ticket_id}
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <strong>Status:</strong> <span className={`status-badge ${getStatusClass(trackingInfo.status)}`}>{trackingInfo.status}</span>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <strong>Issue:</strong> {trackingInfo.issue_type}
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                          <strong>Department:</strong> {trackingInfo.department}
                        </div>
                        <div>
                          <strong>Priority:</strong> {trackingInfo.priority}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div style={{ marginTop: '32px' }}>
                  <h4 style={{ marginBottom: '16px', color: '#f0f9ff' }}>
                    Your Recent Complaints
                  </h4>
                  {complaints.length > 0 ? (
                    <div className="complaints-list">
                      {complaints.slice(0, 5).map(c => (
                        <div key={c.ticket_id} className="complaint-item">
                          <div className="complaint-id">{c.ticket_id}</div>
                          <div className="complaint-info">
                            <div className="complaint-type">{c.issue_type}</div>
                            <div className="complaint-location">{c.location}</div>
                          </div>
                          <div>{c.department}</div>
                          <div className={`status-badge ${getStatusClass(c.status)}`}>
                            {c.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-state">
                      <p>No complaints filed yet</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'nearby' && (
              <div className="card">
                <div className="card-title">Nearby Issues</div>
                <p style={{ color: '#94a3b8' }}>
                  View the main dashboard to see nearby issues on the heat map
                </p>
                <button className="btn-primary" style={{ marginTop: '16px' }} onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
