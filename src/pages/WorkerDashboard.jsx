import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export function WorkerDashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('assigned')
  const [complaints, setComplaints] = useState([])
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [updateNote, setUpdateNote] = useState('')
  const [newStatus, setNewStatus] = useState('')

  useEffect(() => {
    fetchComplaints()
  }, [])

  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${API_BASE_URL}/api/complaints/?limit=100`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const data = await res.json()
        // Filter for in-progress and pending (assigned to workers)
        const assigned = data.complaints?.filter(c =>
          c.status === 'In Progress' || c.status === 'Pending'
        ) || []
        setComplaints(assigned)
      }
    } catch (err) {
      console.error('Failed to fetch complaints:', err)
    }
  }

  const handleMarkResolved = async (complaintId) => {
    if (!updateNote.trim()) {
      alert('Please add a note before resolving')
      return
    }

    try {
      const token = localStorage.getItem('token')
      const res = await fetch(
        `${API_BASE_URL}/api/complaints/${complaintId}/status`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'Resolved',
            note: updateNote
          })
        }
      )

      if (res.ok) {
        setSelectedComplaint(null)
        setUpdateNote('')
        fetchComplaints()
      }
    } catch (err) {
      console.error('Failed to resolve complaint:', err)
    }
  }

  const handleUpdateStatus = async () => {
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
          body: JSON.stringify({
            status: newStatus,
            note: updateNote
          })
        }
      )

      if (res.ok) {
        setSelectedComplaint(null)
        setUpdateNote('')
        setNewStatus('')
        fetchComplaints()
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
    .worker-dashboard {
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

    .badge-worker {
      display: inline-block;
      background: rgba(16, 185, 129, 0.2);
      color: #10b981;
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

    .complaints-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }

    @media (max-width: 900px) {
      .complaints-grid {
        grid-template-columns: 1fr;
      }
    }

    .complaint-card {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .complaint-card:hover {
      border-color: #06b6d4;
      background: #162030;
    }

    .complaint-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .ticket-id {
      font-family: 'Syne', sans-serif;
      color: #06b6d4;
      font-weight: 700;
      font-size: 14px;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
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

    .complaint-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .info-row {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }

    .info-label {
      color: #94a3b8;
      font-weight: 600;
    }

    .info-value {
      color: #cbd5e1;
      font-weight: 500;
    }

    .severity-bar {
      background: #0d1520;
      height: 4px;
      border-radius: 2px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .severity-fill {
      height: 100%;
      border-radius: 2px;
    }

    .action-buttons {
      display: flex;
      gap: 8px;
    }

    .btn-update,
    .btn-resolve {
      flex: 1;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      font-family: 'DM Sans', sans-serif;
      transition: all 0.2s;
    }

    .btn-update {
      background: transparent;
      border: 1px solid #06b6d4;
      color: #06b6d4;
    }

    .btn-update:hover {
      background: rgba(6, 182, 212, 0.1);
    }

    .btn-resolve {
      background: #10b981;
      color: #000;
    }

    .btn-resolve:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
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
      padding: 12px;
      color: #f0f9ff;
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-input:focus,
    .form-select:focus {
      outline: none;
      border-color: #06b6d4;
    }

    .form-input[type="textarea"],
    textarea.form-input {
      resize: vertical;
      min-height: 120px;
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
      background: linear-gradient(135deg, #10b981, #059669);
      color: #000;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
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

    .severity-critical { background: #ef4444; }
    .severity-high { background: #f59e0b; }
    .severity-medium { background: #06b6d4; }
    .severity-low { background: #10b981; }
  `

  const getSeverityColor = (severity) => {
    if (severity >= 9) return 'severity-critical'
    if (severity >= 7) return 'severity-high'
    if (severity >= 5) return 'severity-medium'
    return 'severity-low'
  }

  const getStatusClass = (status) => {
    if (status === 'In Progress') return 'status-progress'
    return 'status-pending'
  }

  return (
    <>
      <style>{css}</style>
      <div className="worker-dashboard">
        <div className="dashboard-header">
          <div className="header-left">
            <div className="header-title">
              City<span>Pulse</span>
            </div>
            <div className="user-info">
              Welcome, <span className="user-name">{user?.name || 'Worker'}</span>
              <span className="badge-worker">WORKER</span>
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
              className={`tab-btn ${activeTab === 'assigned' ? 'active' : ''}`}
              onClick={() => setActiveTab('assigned')}
            >
              📋 Assigned Complaints ({complaints.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => setActiveTab('guide')}
            >
              📖 Work Guide
            </button>
          </div>

          {activeTab === 'assigned' && (
            <div className="card">
              <div className="card-title">Your Assigned Tasks</div>
              {complaints.length > 0 ? (
                <div className="complaints-grid">
                  {complaints.map(c => (
                    <div key={c.ticket_id} className="complaint-card">
                      <div className="complaint-header">
                        <div className="ticket-id">{c.ticket_id}</div>
                        <span className={`status-badge ${getStatusClass(c.status)}`}>
                          {c.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#f0f9ff' }}>
                        {c.issue_type}
                      </div>

                      <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px' }}>
                        📍 {c.location}
                      </div>

                      <div className="severity-bar">
                        <div
                          className={`severity-fill ${getSeverityColor(c.severity)}`}
                          style={{ width: `${(c.severity / 10) * 100}%` }}
                        ></div>
                      </div>

                      <div className="complaint-info">
                        <div className="info-row">
                          <div className="info-label">Severity</div>
                          <div className="info-value">{c.severity}/10</div>
                        </div>
                        <div className="info-row">
                          <div className="info-label">Priority</div>
                          <div className="info-value">{c.priority}</div>
                        </div>
                        <div className="info-row">
                          <div className="info-label">Department</div>
                          <div className="info-value">{c.department}</div>
                        </div>
                      </div>

                      <div className="action-buttons">
                        <button
                          className="btn-update"
                          onClick={() => {
                            setSelectedComplaint(c)
                            setNewStatus(c.status)
                            setUpdateNote('')
                          }}
                        >
                          📝 Update Status
                        </button>
                        <button
                          className="btn-resolve"
                          onClick={() => {
                            setSelectedComplaint(c)
                            setNewStatus('Resolved')
                            setUpdateNote('')
                          }}
                        >
                          ✓ Resolve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>✓ No pending complaints assigned to you</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="card">
              <div className="card-title">Worker Instructions</div>
              <div style={{ lineHeight: '1.8', color: '#cbd5e1' }}>
                <h3 style={{ marginTop: '16px', color: '#f0f9ff' }}>1. Review Assigned Complaints</h3>
                <p>Check the "Assigned Complaints" tab for all tasks assigned to you.</p>

                <h3 style={{ marginTop: '16px', color: '#f0f9ff' }}>2. Update Progress</h3>
                <p>Click "Update Status" to change from Pending to In Progress as you work on the issue.</p>

                <h3 style={{ marginTop: '16px', color: '#f0f9ff' }}>3. Upload Repair Photo</h3>
                <p>When resolved, include a before/after photo as documentation.</p>

                <h3 style={{ marginTop: '16px', color: '#f0f9ff' }}>4. Mark as Resolved</h3>
                <p>When the issue is fixed, click "Resolve" and add a completion note.</p>

                <h3 style={{ marginTop: '16px', color: '#f0f9ff' }}>5. Notes Section</h3>
                <p>Always add completion notes for the record - describes what was done and any follow-up needed.</p>

                <div style={{
                  background: '#0d1520',
                  border: '1px solid #1e3048',
                  borderRadius: '8px',
                  padding: '16px',
                  marginTop: '24px'
                }}>
                  <p style={{ color: '#10b981', fontWeight: '600' }}>💡 Pro Tip</p>
                  <p>Add detailed notes for each update so officials can track progress and understand any roadblocks.</p>
                </div>
              </div>
            </div>
          )}

          {selectedComplaint && (
            <div className="modal-overlay" onClick={() => setSelectedComplaint(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-title">
                  {newStatus === 'Resolved' ? '✓ Mark as Resolved' : 'Update Status'} - {selectedComplaint.ticket_id}
                </div>

                <div className="modal-content">
                  <div className="modal-row">
                    <div>
                      <div className="modal-label">Issue</div>
                      <div className="modal-value">{selectedComplaint.issue_type}</div>
                    </div>
                    <div>
                      <div className="modal-label">Severity</div>
                      <div className="modal-value">{selectedComplaint.severity}/10</div>
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

                  {newStatus !== 'Resolved' && (
                    <div className="form-group">
                      <label className="form-label">Change Status To</label>
                      <select
                        className="form-select"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                      </select>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Work Notes / Completion Details</label>
                    <textarea
                      className="form-input"
                      placeholder={newStatus === 'Resolved' ? 'Describe what was done and mark as resolved...' : 'Add notes about your progress...'}
                      value={updateNote}
                      onChange={(e) => setUpdateNote(e.target.value)}
                      rows={6}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
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
                    onClick={() => {
                      if (newStatus === 'Resolved') {
                        handleMarkResolved(selectedComplaint.ticket_id)
                      } else {
                        handleUpdateStatus()
                      }
                    }}
                  >
                    {newStatus === 'Resolved' ? 'Mark Resolved' : 'Update Status'}
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
