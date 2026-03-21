import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check if user is already logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      verifyToken(token)
    } else {
      setLoading(false)
    }
  }, [])

  const verifyToken = async (token) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        const userData = await res.json()
        setUser(userData)
      } else {
        localStorage.removeItem('token')
        setUser(null)
      }
    } catch (err) {
      console.error('Token verification failed:', err)
      localStorage.removeItem('token')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const register = async (name, email, password, role) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || 'Registration failed')
        return { success: false, error: data.detail }
      }

      return { success: true, message: data.message }
    } catch (err) {
      const errorMsg = 'Registration error: ' + err.message
      setError(errorMsg)
      return { success: false, error: errorMsg }
    }
  }

  const login = async (email, password) => {
    setError(null)
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || 'Login failed')
        return { success: false, error: data.detail }
      }

      // Store token and user info
      localStorage.setItem('token', data.access_token)
      setUser({
        email: data.name,
        role: data.role,
        name: data.name
      })

      return { success: true, role: data.role }
    } catch (err) {
      const errorMsg = 'Login error: ' + err.message
      setError(errorMsg)
      return { success: false, error: errorMsg }
    }
  }

  const logout = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        await fetch(`${API_BASE_URL}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
      }
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      localStorage.removeItem('token')
      setUser(null)
      setError(null)
    }
  }

  const getToken = () => localStorage.getItem('token')

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
