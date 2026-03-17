import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './contexts/ProtectedRoute'

// Pages
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

// Role-based Dashboards
import { CitizenDashboard } from './pages/CitizenDashboard'
import { FileComplaintPage } from './pages/FileComplaintPage'
import { OfficialDashboard } from './pages/OfficialDashboard'
import { WorkerDashboard } from './pages/WorkerDashboard'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Role-based Protected Routes */}
          <Route
            path="/citizen/dashboard"
            element={
              <ProtectedRoute requiredRole="citizen">
                <CitizenDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/citizen/file"
            element={
              <ProtectedRoute requiredRole="citizen">
                <FileComplaintPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/official/dashboard"
            element={
              <ProtectedRoute requiredRole="official">
                <OfficialDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/worker/dashboard"
            element={
              <ProtectedRoute requiredRole="worker">
                <WorkerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
