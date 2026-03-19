import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, error } = useAuth()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError('')
    setLoading(true)

    if (!email || !password) {
      setFormError('Please enter email and password')
      setLoading(false)
      return
    }

    const result = await login(email, password)
    
    if (result.success) {
      // Redirect based on role
      if (result.role === 'citizen') {
        navigate('/citizen/dashboard')
      } else if (result.role === 'official') {
        navigate('/official/dashboard')
      } else if (result.role === 'worker') {
        navigate('/worker/dashboard')
      }
    } else {
      setFormError(result.error || 'Login failed')
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

    .login-container {
      background: #080c14;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
      color: #cbd5e1;
    }

    .login-card {
      background: #111d2e;
      border: 1px solid #1e3048;
      border-radius: 16px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }

    .login-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .login-logo {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .login-logo span {
      color: #06b6d4;
    }

    .login-subtitle {
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

    .form-input {
      background: #0d1520;
      border: 1px solid #1e3048;
      border-radius: 8px;
      padding: 12px 16px;
      color: #f0f9ff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-input:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 8px;
      padding: 12px;
      color: #ef4444;
      font-size: 13px;
      margin-bottom: 20px;
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
      margin-bottom: 16px;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .signup-link {
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
    }

    .signup-link a {
      color: #06b6d4;
      text-decoration: none;
      font-weight: 600;
    }

    .signup-link a:hover {
      text-decoration: underline;
    }

    .divider {
      text-align: center;
      margin: 24px 0;
      color: #334155;
      font-size: 13px;
    }

    .demo-note {
      background: rgba(6, 182, 212, 0.05);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 8px;
      padding: 12px;
      font-size: 12px;
      color: #94a3b8;
      margin-top: 16px;
    }
  `

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
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              City<span>Pulse</span>
            </div>
            <div className="login-subtitle">
              Urban Grievance Management
            </div>
          </div>

          {(formError || error) && (
            <div className="error-message">
              {formError || error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </form>

          <div className="signup-link">
            Don't have an account? <Link to="/register">Sign up here</Link>
          </div>

          <div className="divider">Demo Credentials</div>
          <div className="demo-note">
            <strong>Citizen:</strong> citizen@demo.com / demo123<br />
            <strong>Official:</strong> official@demo.com / demo123<br />
            <strong>Worker:</strong> worker@demo.com / demo123
          </div>
        </div>
      </div>
    </>
  )
}
