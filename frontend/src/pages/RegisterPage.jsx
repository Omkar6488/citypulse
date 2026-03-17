import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register, error } = useAuth()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('citizen')
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')
    setSuccess(false)
    setLoading(true)

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
      setFormError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setFormError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    const result = await register(name, email, password, role)
    
    if (result.success) {
      setSuccess(true)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      
      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } else {
      setFormError(result.error || 'Registration failed')
    }
    
    setLoading(false)
  }

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 40px;
      background: rgba(8, 12, 20, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1e3048;
    }
    
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #f0f9ff;
      cursor: pointer;
    }
    
    .nav-logo span { color: #06b6d4; }
    
    .nav-home {
      background: transparent;
      border: 1px solid #1e3048;
      color: #cbd5e1;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'DM Sans', sans-serif;
    }
    
    .nav-home:hover {
      background: #111d2e;
      border-color: #06b6d4;
      color: #06b6d4;
    }

    .register-container {
      background: #080c14;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
      color: #cbd5e1;
      padding: 20px;
    }

    .register-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    .register-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .register-logo {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .register-logo span {
      color: #06b6d4;
    }

    .register-subtitle {
      color: #64748b;
      font-size: 14px;
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
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .form-select option {
      background: #111d2e;
      color: #f0f9ff;
    }

    .error-message,
    .success-message {
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      margin-bottom: 20px;
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
    }

    .success-message {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
    }

    .submit-button {
      width: 100%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 15px;
      font-family: 'Syne', sans-serif;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      margin-top: 20px;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .login-link {
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
      margin-top: 20px;
    }

    .login-link a {
      color: #06b6d4;
      text-decoration: none;
      font-weight: 600;
    }

    .login-link a:hover {
      text-decoration: underline;
    }

    .role-description {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
  `

  const roleDescriptions = {
    citizen: "File complaints and track issues",
    official: "Manage departments and SLA tracking",
    worker: "Update and resolve assigned complaints"
  }

  return (
    <>
      <style>{css}</style>
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navigate('/')}>
          City<span>Pulse</span>
        </div>
        <button className="nav-home" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </nav>
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <div className="register-logo">
              City<span>Pulse</span>
            </div>
            <div className="register-subtitle">
              Join the Urban Grievance Network
            </div>
          </div>

          {(formError || error) && (
            <div className="error-message">
              {formError || error}
            </div>
          )}

          {success && (
            <div className="success-message">
              ✓ Registration successful! Redirecting to login...
            </div>
          )}

          {!success && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">I am a...</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="citizen">Citizen</option>
                  <option value="official">Government Official</option>
                  <option value="worker">Department Worker</option>
                </select>
                <div className="role-description">
                  {roleDescriptions[role]}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          )}

          <div className="login-link">
            Already have an account? <Link to="/login">Sign in here</Link>
          </div>
        </div>
      </div>
    </>
  )
}
