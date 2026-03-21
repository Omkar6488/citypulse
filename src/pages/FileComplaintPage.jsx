import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export function FileComplaintPage() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [formData, setFormData] = useState({
    issueType: '',
    location: '',
    description: '',
    severity: 'medium',
    attachments: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [ticketId, setTicketId] = useState('')

  const issueTypes = [
    'Pothole',
    'Streetlight Failure',
    'Waterlogging',
    'Garbage Overflow',
    'Road Cave-in',
    'Broken Footpath',
    'Water Pipe Burst',
    'Illegal Dumping',
    'Tree Fallen',
    'Sewage Overflow',
    'Traffic Signal Malfunction',
    'Other'
  ]

  // AI Triage Algorithm - Analyzes complaint and assigns department
  const performAITriage = (issue, description, severity) => {
    const departmentMap = {
      'Pothole': 'PWD',
      'Streetlight Failure': 'Electricity',
      'Waterlogging': 'Water Board',
      'Garbage Overflow': 'Sanitation',
      'Road Cave-in': 'PWD',
      'Broken Footpath': 'PWD',
      'Water Pipe Burst': 'Water Board',
      'Illegal Dumping': 'Sanitation',
      'Tree Fallen': 'Parks & Gardens',
      'Sewage Overflow': 'Water Board',
      'Traffic Signal Malfunction': 'Traffic Police',
      'Other': 'General'
    }

    const priorityLevels = {
      9: 'CRITICAL',
      7: 'HIGH',
      5: 'MEDIUM',
      2: 'LOW'
    }

    const department = departmentMap[issue] || 'General'
    let priorityScore = priorityLevels[severity] ? priorityLevels[severity] : 'MEDIUM'

    // Keywords for emergency detection
    const emergencyKeywords = ['urgent', 'danger', 'accident', 'injured', 'hazard', 'critical', 'blocked']
    const isEmergency = emergencyKeywords.some(kw => description.toLowerCase().includes(kw))

    if (isEmergency) priorityScore = 'CRITICAL'

    return {
      department,
      priority: priorityScore,
      routed: true,
      algorithm: 'AI-Triage-v1.0'
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Get real-time AI preview
  const getAIPreview = () => {
    if (!formData.issueType) return null
    return performAITriage(formData.issueType, formData.description, formData.severity)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validate
    if (!formData.issueType || !formData.location || !formData.description) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    if (formData.description.length < 20) {
      setError('Description must be at least 20 characters')
      setLoading(false)
      return
    }

    try {
      // Run AI Triage Algorithm
      const triageResult = performAITriage(formData.issueType, formData.description, formData.severity)

      const token = localStorage.getItem('token')
      const complaintData = {
        issue_type: formData.issueType,
        location: formData.location,
        description: formData.description,
        severity: formData.severity,
        department: triageResult.department,
        priority: triageResult.priority
      }

      const res = await fetch(`${API_BASE_URL}/api/complaints/file`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(complaintData)
      })

      const data = await res.json()

      if (res.ok && data.ticket_id) {
        setSuccess(true)
        setTicketId(data.ticket_id)
        setFormData({
          issueType: '',
          location: '',
          description: '',
          severity: 'medium',
          attachments: []
        })
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          navigate('/citizen/dashboard')
        }, 2000)
      } else {
        setError(data.message || 'Failed to file complaint')
      }
    } catch (err) {
      setError('Error filing complaint: ' + err.message)
    }

    setLoading(false)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .file-complaint-page {
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

    .back-btn,
    .logout-btn {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .back-btn:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .logout-btn {
      border-color: #ef4444;
      color: #ef4444;
    }

    .logout-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .page-container {
      padding: 32px;
      max-width: 800px;
      margin: 0 auto;
    }

    .form-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 20px;
    }

    .form-title {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
      color: #f0f9ff;
    }

    .form-subtitle {
      color: #94a3b8;
      font-size: 14px;
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .form-input,
    .form-select,
    .form-textarea {
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
    .form-select:focus,
    .form-textarea:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
      font-family: 'DM Sans', sans-serif;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .success-message {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    .btn-submit,
    .btn-cancel {
      flex: 1;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }

    .btn-submit {
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
    }

    .btn-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .btn-submit:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-cancel {
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
    }

    .btn-cancel:hover {
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .ticket-info {
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: #06b6d4;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
    }

    .ticket-label {
      font-size: 11px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .ticket-value {
      font-family: 'Syne', sans-serif;
      font-size: 18px;
      font-weight: 800;
    }

    .tips-section {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
    }

    .tips-title {
      font-weight: 600;
      color: #f0f9ff;
      margin-bottom: 8px;
    }

    .tips-list {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
    }

    .tips-list li {
      margin-bottom: 6px;
    }

    .ai-analyzer-panel {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.05) 100%);
      border: 2px solid rgba(6, 182, 212, 0.3);
      border-radius: 12px;
      padding: 20px;
      margin-top: 24px;
      backdrop-filter: blur(8px);
    }

    .ai-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #06b6d4;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .ai-icon {
      font-size: 18px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }

    .ai-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .ai-item {
      background: rgba(17, 29, 46, 0.6);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 8px;
      padding: 12px;
    }

    .ai-label {
      font-size: 11px;
      color: #94a3b8;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 4px;
      letter-spacing: 0.05em;
    }

    .ai-value {
      font-size: 15px;
      font-weight: 700;
      color: #06b6d4;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .priority-critical {
      color: #ef4444;
    }

    .priority-high {
      color: #f59e0b;
    }

    .priority-medium {
      color: #06b6d4;
    }

    .priority-low {
      color: #10b981;
    }

    .ai-note {
      font-size: 12px;
      color: #64748b;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(6, 182, 212, 0.2);
      font-style: italic;
    }
  `

  return (
    <>
      <style>{css}</style>
      <div className="file-complaint-page">
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
            <button className="back-btn" onClick={() => navigate('/citizen/dashboard')}>
              ← Back to Dashboard
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="page-container">
          <div className="form-card">
            <div className="form-title">📝 File a New Complaint</div>
            <div className="form-subtitle">
              Report civic issues in your area. Our AI system will automatically route your complaint to the right department.
            </div>

            {error && <div className="error-message">❌ {error}</div>}
            {success && (
              <div className="success-message">
                ✓ Complaint filed successfully! Ticket: <strong>{ticketId}</strong>
              </div>
            )}

            {!success && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Issue Type *</label>
                  <select
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select an issue type...</option>
                    {issueTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Location *</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g., FC Road, Shivajinagar"
                      value={formData.location}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Severity Level</label>
                    <select
                      name="severity"
                      value={formData.severity}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Description *</label>
                  <textarea
                    name="description"
                    placeholder="Describe the issue in detail... (minimum 20 characters)"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                    minLength={20}
                  />
                </div>

                {getAIPreview() && (
                  <div className="ai-analyzer-panel">
                    <div className="ai-title">
                      <span className="ai-icon">🤖</span>
                      AI Analyzer
                    </div>
                    <div className="ai-grid">
                      <div className="ai-item">
                        <div className="ai-label">🏢 Department</div>
                        <div className="ai-value">{getAIPreview().department}</div>
                      </div>
                      <div className="ai-item">
                        <div className="ai-label">⚡ Priority</div>
                        <div className={`ai-value priority-${typeof getAIPreview().priority === 'string' ? getAIPreview().priority.toLowerCase() : 'medium'}`}>
                          {getAIPreview().priority}
                        </div>
                      </div>
                      <div className="ai-item">
                        <div className="ai-label">📊 Severity</div>
                        <div className="ai-value">
                          {getAIPreview().priority === 'CRITICAL' ? '🔴' : getAIPreview().priority === 'HIGH' ? '🟠' : getAIPreview().priority === 'MEDIUM' ? '🔵' : '🟢'} 
                          {getAIPreview().priority === 'CRITICAL' ? '9' : getAIPreview().priority === 'HIGH' ? '7' : getAIPreview().priority === 'MEDIUM' ? '5' : '2'}/10
                        </div>
                      </div>
                      <div className="ai-item">
                        <div className="ai-label">⏱️ SLA</div>
                        <div className="ai-value">{getAIPreview().priority === 'CRITICAL' ? '2h' : getAIPreview().priority === 'HIGH' ? '6h' : '24h'}</div>
                      </div>
                    </div>
                    <div className="ai-note">
                      ℹ️ AI analysis: Your complaint will be auto-routed to {getAIPreview().department} with {getAIPreview().priority} priority.
                    </div>
                  </div>
                )}

                <div className="button-group">
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={loading}
                  >
                    {loading ? 'Filing Complaint...' : 'File Complaint'}
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => navigate('/citizen/dashboard')}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {success && (
              <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '16px' }}>
                Redirecting to dashboard in a moment...
              </p>
            )}
          </div>

          <div className="tips-section">
            <div className="tips-title">📋 Tips for Filing a Complaint</div>
            <ul className="tips-list">
              <li>✓ Be specific about the location - include nearby landmarks</li>
              <li>✓ Provide detailed description to help faster resolution</li>
              <li>✓ Mark severity accurately - it helps with prioritization</li>
              <li>✓ Our AI system automatically routes to the right department</li>
              <li>✓ Track your complaint status using your ticket ID on the dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
