import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export function OfficialDashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('analytics')
  const [summary, setSummary] = useState(null)
  const [complaints, setComplaints] = useState([])
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [newStatus, setNewStatus] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const [summRes, complRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/analytics/summary`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/api/complaints/?limit=50`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ])

      if (summRes.ok) setSummary(await summRes.json())
      if (complRes.ok) {
        const data = await complRes.json()
        setComplaints(data.complaints || [])
      }
    } catch (err) {
      console.error('Failed to fetch data:', err)
    }
  }

  const handleUpdateStatus = async () => {
    if (!selectedComplaint || !newStatus) return

    try {
      const token = localStorage.getItem('token')
      const res = await fetch(
        `${API_BASE_URL}/api/complaints/${selectedComplaint.ticket_id}/status`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus, note: '' })
        }
      )

      if (res.ok) {
        setSelectedComplaint(null)
        setNewStatus('')
        fetchData()
      }
    } catch (err) {
      console.error('Failed to update status:', err)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const css = `
    .official-dashboard {
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

    .badge-official {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      color: #6366f1;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      margin-left: 8px;
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
      max-width: 1400px;
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

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 32px;
    }

    @media (max-width: 900px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .stat-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
    }

    .stat-value {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: #06b6d4;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 12px;
      color: #94a3b8;
      text-transform: uppercase;
      font-weight: 600;
    }

    .card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .complaints-table {
      overflow-x: auto;
    }

    .complaints-table table {
      width: 100%;
      border-collapse: collapse;
    }

    .complaints-table th {
      background: #0d1520;
      padding: 12px;
      text-align: left;
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      border-bottom: 1px solid #1e3048;
    }

    .complaints-table td {
      padding: 16px 12px;
      border-bottom: 1px solid #1e3048;
      font-size: 14px;
    }

    .complaints-table tr:hover {
      background: #0d1520;
      cursor: pointer;
    }

    .ticket-id {
      font-family: 'Syne', sans-serif;
      color: #06b6d4;
      font-weight: 700;
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

    .status-critical {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 32px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #f0f9ff;
      margin-bottom: 16px;
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    .modal-row {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      background: #0d1520;
      border-radius: 8px;
    }

    .modal-label {
      color: #94a3b8;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .modal-value {
      color: #f0f9ff;
      font-weight: 600;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
    }

    .form-select {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px;
      color: #f0f9ff;
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-select:focus {
      outline: none;
      border-color: #06b6d4;
    }

    .modal-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-primary,
    .btn-secondary {
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      flex: 1;
    }

    .btn-primary {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid #1e3048;
      color: #94a3b8;
    }

    .btn-secondary:hover {
      border-color: #06b6d4;
      color: #06b6d4;
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
    if (status === 'Critical') return 'status-critical'
    return 'status-pending'
  }

  return (
    <>
      <style>{css}</style>
      <div className="official-dashboard">
        <div className="dashboard-header">
          <div className="header-left">
            <div className="header-title">
              City<span>Pulse</span>
            </div>
            <div className="user-info">
              Welcome, <span className="user-name">{user?.name || 'Official'}</span>
              <span className="badge-official">OFFICIAL</span>
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
              className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              📊 Analytics
            </button>
            <button
              className={`tab-btn ${activeTab === 'manage' ? 'active' : ''}`}
              onClick={() => setActiveTab('manage')}
            >
              📋 Manage Complaints
            </button>
          </div>

          {activeTab === 'analytics' && summary && (
            <div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">{summary.total || 0}</div>
                  <div className="stat-label">Total Complaints</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{summary.active || 0}</div>
                  <div className="stat-label">Active</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{summary.resolved || 0}</div>
                  <div className="stat-label">Resolved</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{summary.critical || 0}</div>
                  <div className="stat-label">Critical</div>
                </div>
              </div>

              <div className="card">
                <div className="card-title">KPI Metrics</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div style={{ background: '#0d1520', padding: '16px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Resolution Rate</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#10b981' }}>
                      {summary.resolution_rate ? Math.round(summary.resolution_rate) : 0}%
                    </div>
                  </div>
                  <div style={{ background: '#0d1520', padding: '16px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Avg Resolution</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#06b6d4' }}>
                      {summary.avg_resolution_hours ? Math.round(summary.avg_resolution_hours) : 0}h
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'manage' && (
            <div className="card">
              <div className="card-title">Manage Complaints</div>
              {complaints.length > 0 ? (
                <div className="complaints-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Ticket ID</th>
                        <th>Issue Type</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complaints.map(c => (
                        <tr key={c.ticket_id}>
                          <td className="ticket-id">{c.ticket_id}</td>
                          <td>{c.issue_type}</td>
                          <td>{c.location}</td>
                          <td>{c.department}</td>
                          <td>{c.priority}</td>
                          <td>
                            <span className={`status-badge ${getStatusClass(c.status)}`}>
                              {c.status}
                            </span>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                setSelectedComplaint(c)
                                setNewStatus(c.status)
                              }}
                              style={{
                                background: 'transparent',
                                border: '1px solid #06b6d4',
                                color: '#06b6d4',
                                padding: '4px 12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600'
                              }}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-state">
                  <p>No complaints to manage</p>
                </div>
              )}
            </div>
          )}

          {selectedComplaint && (
            <div className="modal-overlay" onClick={() => setSelectedComplaint(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-title">
                  Update Complaint {selectedComplaint.ticket_id}
                </div>

                <div className="modal-content">
                  <div className="modal-row">
                    <div>
                      <div className="modal-label">Issue</div>
                      <div className="modal-value">{selectedComplaint.issue_type}</div>
                    </div>
                    <div>
                      <div className="modal-label">Priority</div>
                      <div className="modal-value">{selectedComplaint.priority}</div>
                    </div>
                  </div>

                  <div className="modal-row">
                    <div>
                      <div className="modal-label">Location</div>
                      <div className="modal-value">{selectedComplaint.location}</div>
                    </div>
                    <div>
                      <div className="modal-label">Department</div>
                      <div className="modal-value">{selectedComplaint.department}</div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Change Status</label>
                    <select
                      className="form-select"
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Critical">Critical</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>

                <div className="modal-buttons">
                  <button
                    className="btn-secondary"
                    onClick={() => setSelectedComplaint(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn-primary"
                    onClick={handleUpdateStatus}
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
