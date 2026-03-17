import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'
import heroBg from '../assets/images/citypune.jpg'

export function HomePage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  // If user is already logged in, redirect to their dashboard
  useEffect(() => {
    if (user) {
      if (user.role === 'citizen') navigate('/citizen/dashboard')
      else if (user.role === 'official') navigate('/official/dashboard')
      else if (user.role === 'worker') navigate('/worker/dashboard')
    }
  }, [user, navigate])

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #080c14 0%, #0d1520 100%)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: #cbd5e1; }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
          background: linear-gradient(180deg, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0.85) 100%);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(6, 182, 212, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 1px rgba(6, 182, 212, 0.2);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }
        
        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #f0f9ff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .nav-logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4));
        }
        
        .nav-logo span {
          color: #06b6d4;
          transition: all 0.3s ease;
        }
        
        .nav-links {
          display: flex;
          gap: 40px;
          align-items: center;
          list-style: none;
        }
        
        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
          padding: 4px 0;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #0891b2);
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        
        .nav-link:hover {
          color: #06b6d4;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        .login-buttons {
          display: flex;
          gap: 12px;
        }
        
        .btn-login {
          padding: 9px 20px;
          border: 1.5px solid rgba(6, 182, 212, 0.3);
          background: rgba(6, 182, 212, 0.05);
          color: #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .btn-login:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-login:hover {
          background: rgba(6, 182, 212, 0.15);
          border-color: #06b6d4;
          color: #06b6d4;
          box-shadow: 0 0 16px rgba(6, 182, 212, 0.2), inset 0 0 16px rgba(6, 182, 212, 0.05);
          transform: translateY(-2px);
        }
        
        .btn-login:hover:before {
          left: 100%;
        }
        
        .btn-signup {
          padding: 9px 20px;
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          color: #000;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(6, 182, 212, 0.3);
        }
        
        .btn-signup:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        
        .btn-signup:hover {
          background: linear-gradient(135deg, #0891b2 0%, #067a8f 100%);
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(6, 182, 212, 0.4);
        }
        
        .btn-signup:hover:before {
          width: 300px;
          height: 300px;
        }
        
        .hero {
          padding: 100px 40px;
          text-align: center;
          width: 100%;
          margin: 0 auto;
          position: relative;
          margin-bottom: 40px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .hero-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #06b6d4;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }
        
        .hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #f0f9ff;
          letter-spacing: -0.5px;
          margin-bottom: 24px;
          margin-top: -30px;
          display: inline-block;
        }
        
        .hero-label span { color: #06b6d4; }
        
        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: 64px;
          font-weight: 800;
          color: #f0f9ff;
          line-height: 1.3;
          margin-bottom: 24px;
          margin-top: 0px;
          letter-spacing: -0.5px;
        }
        
        .hero-title span { color: #06b6d4; }
        
        .hero-subtitle {
          font-size: 18px;
          color: #f0f9ff;
          margin-bottom: 40px;
          line-height: 1.6;
          font-weight: 500;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(6, 182, 212, 0.3);
          letter-spacing: 0.5px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 80px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 0;
        }
        
        .stat-item {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 12px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        
        .stat-item:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(6, 182, 212, 0.2);
        }
        
        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #06b6d4;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
          line-height: 1.5;
        }
        
        .btn-primary {
          padding: 14px 32px;
          background: #06b6d4;
          color: #000;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .btn-primary:hover {
          background: #0891b2;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3);
        }
        
        .btn-secondary {
          padding: 14px 32px;
          background: transparent;
          color: #06b6d4;
          border: 2px solid #06b6d4;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .btn-secondary:hover {
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-2px);
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 80px;
        }
        
        .feature-card {
          background: #111d2e;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s;
        }
        
        .feature-card:hover {
          border-color: #06b6d4;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
        }
        
        .feature-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        
        .feature-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }
        
        .feature-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .roles-section {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 60px 40px;
          margin-bottom: 80px;
        }
        
        .roles-title {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #f0f9ff;
          text-align: center;
          margin-bottom: 48px;
        }
        
        .roles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .role-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s;
        }
        
        .role-card:hover {
          border-color: #06b6d4;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
        }
        
        .role-badge {
          display: inline-block;
          background: rgba(6, 182, 212, 0.15);
          color: #06b6d4;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .role-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .role-name {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }
        
        .role-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .role-features {
          text-align: left;
          font-size: 12px;
          color: #cbd5e1;
          margin-bottom: 20px;
        }
        
        .role-features li {
          margin-bottom: 6px;
          margin-left: 20px;
        }
        
        .role-btn {
          padding: 10px 20px;
          background: #06b6d4;
          color: #000;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
          width: 100%;
        }
        
        .role-btn:hover {
          background: #0891b2;
          transform: scale(1.02);
        }
        
        .cta-section {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          border-radius: 16px;
          padding: 60px 40px;
          text-align: center;
          margin-bottom: 80px;
        }
        
        .cta-title {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #000;
          margin-bottom: 16px;
        }
        
        .cta-desc {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 32px;
        }
        
        .cta-btn {
          padding: 14px 40px;
          background: #000;
          color: #06b6d4;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        
        .cta-btn:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
        }
        
        .features-detail-section {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 80px 40px;
          margin-bottom: 80px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-detail-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .features-detail-title {
          font-family: 'Outfit', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 16px;
        }

        .features-detail-subtitle {
          font-size: 16px;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .feature-detail-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 40px;
          transition: all 0.3s;
        }

        .feature-detail-card:hover {
          border-color: #06b6d4;
          box-shadow: 0 12px 48px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }

        .feature-detail-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .feature-detail-title {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .feature-detail-desc {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .feature-benefits {
          list-style: none;
          margin-top: 16px;
        }

        .feature-benefits li {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .feature-benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #06b6d4;
          font-weight: bold;
        }

        .features-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-top: 40px;
          border-top: 1px solid #1e3048;
        }

        .stat-box {
          text-align: center;
        }

        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #06b6d4;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          color: #94a3b8;
        }

        .about-section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-title {
          font-family: 'Outfit', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 16px;
        }

        .about-subtitle {
          font-size: 16px;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        .about-text {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.9;
        }

        .about-text p {
          margin-bottom: 16px;
        }

        .about-text strong {
          color: #06b6d4;
          font-weight: 600;
        }

        .about-highlight {
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 40px;
        }

        .about-highlight-title {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .about-highlight-desc {
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .about-mission {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .mission-card {
          background: #0d1520;
          border: 1px solid #1e3048;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s;
        }

        .mission-card:hover {
          border-color: #06b6d4;
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }

        .mission-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .mission-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0f9ff;
          margin-bottom: 8px;
        }

        .mission-desc {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
        }

        .about-team {
          text-align: center;
          background: linear-gradient(135deg, #111d2e 0%, #162030 100%);
          border: 1px solid #1e3048;
          border-radius: 16px;
          padding: 50px;
          margin-bottom: 40px;
        }

        .about-team-title {
          font-family: 'Outfit', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 12px;
        }

        .about-team-desc {
          font-size: 15px;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .footer {
          background: linear-gradient(180deg, #080c14 0%, #0d1520 100%);
          border-top: 1px solid #1e3048;
          padding: 60px 40px 0 40px;
          color: #64748b;
          font-size: 13px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid #1e3048;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-title {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #f0f9ff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .footer-link:hover {
          color: #06b6d4;
          transform: translateX(4px);
        }

        .footer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #f0f9ff;
          margin-bottom: 8px;
        }

        .footer-logo span {
          color: #06b6d4;
        }

        .footer-description {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          color: #06b6d4;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: #06b6d4;
          color: #000;
          border-color: #06b6d4;
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          padding: 30px 0;
        }

        .footer-legal {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-legal-link {
          color: #64748b;
          text-decoration: none;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .footer-legal-link:hover {
          color: #06b6d4;
        }

        .footer-credits {
          text-align: right;
          color: #64748b;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-bottom { grid-template-columns: 1fr; text-align: left; }
          .footer-credits { text-align: left; }
        }
        
        @media (max-width: 1024px) {
          .features, .roles-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 40px; }
          .navbar { padding: 16px 24px; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navigate('/')}>
          City<span>Pulse</span>
        </div>
        <ul className="nav-links">
          <li><a className="nav-link" href="#features">Features</a></li>
          <li><a className="nav-link" href="#roles">User Roles</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
        </ul>
        <div className="login-buttons">
          <button className="btn-login" onClick={() => navigate('/login')}>
            Sign In
          </button>
          <button className="btn-signup" onClick={() => navigate('/register')}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(8, 12, 20, 0.6) 0%, rgba(8, 12, 20, 0.4) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="hero-content">
          <div className="hero-label">City<span>Pulse</span></div>
          <h1 className="hero-title">
            Report & Resolve <span>Civic Issues</span> Faster
          </h1>
          <p className="hero-subtitle">
            CityPulse connects citizens, officials, and workers to resolve urban problems efficiently.
            Report potholes, broken streetlights, waterlogging, and more with AI-powered triage.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/register')}>
              Start Reporting Issues
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('roles').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>

          {/* Trust & Impact Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">✅ 50K+</div>
              <div className="stat-label">Issues Resolved</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">🏙️ 15+</div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">⚡ 2.4h</div>
              <div className="stat-label">Avg. Resolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="features-detail-section" id="features">
        <div className="features-detail-header">
          <h2 className="features-detail-title">Powerful Features Built for Impact</h2>
          <p className="features-detail-subtitle">
            Designed to make civic engagement seamless, transparent, and effective
          </p>
        </div>

        <div className="features-detail-grid">
          <div className="feature-detail-card">
            <div className="feature-detail-icon">📍</div>
            <div className="feature-detail-title">Location-Based Reporting</div>
            <div className="feature-detail-desc">
              File complaints with precise GPS coordinates and integrate with real-time mapping. Our system automatically detects your location and helps workers find issues quickly.
            </div>
            <ul className="feature-benefits">
              <li>Automatic GPS detection</li>
              <li>Real-time map integration</li>
              <li>Location history tracking</li>
              <li>Nearby issues discovery</li>
            </ul>
          </div>

          <div className="feature-detail-card">
            <div className="feature-detail-icon">🤖</div>
            <div className="feature-detail-title">AI-Powered Triage</div>
            <div className="feature-detail-desc">
              Intelligent systems automatically categorize, prioritize, and route complaints to the right departments. Machine learning improves accuracy over time.
            </div>
            <ul className="feature-benefits">
              <li>Auto-categorization</li>
              <li>Smart severity detection</li>
              <li>Department routing</li>
              <li>Duplicate issue detection</li>
            </ul>
          </div>

          <div className="feature-detail-card">
            <div className="feature-detail-icon">⚡</div>
            <div className="feature-detail-title">Real-Time Tracking</div>
            <div className="feature-detail-desc">
              Track your complaint from filing through resolution. Receive instant notifications at each stage and stay informed about progress.
            </div>
            <ul className="feature-benefits">
              <li>Live status updates</li>
              <li>Push notifications</li>
              <li>Photo documentation</li>
              <li>Completion certificates</li>
            </ul>
          </div>

          <div className="feature-detail-card">
            <div className="feature-detail-icon">📊</div>
            <div className="feature-detail-title">Analytics Dashboard</div>
            <div className="feature-detail-desc">
              Visual insights for officials to monitor resolution rates, identify hotspots, and make data-driven decisions for city improvement.
            </div>
            <ul className="feature-benefits">
              <li>KPI tracking & reporting</li>
              <li>Hotspot analysis</li>
              <li>Performance metrics</li>
              <li>Trend prediction</li>
            </ul>
          </div>

          <div className="feature-detail-card">
            <div className="feature-detail-icon">👥</div>
            <div className="feature-detail-title">Multi-Stakeholder Platform</div>
            <div className="feature-detail-desc">
              Unified system for citizens reporting, officials managing, and workers executing. Complete transparency across the entire resolution process.
            </div>
            <ul className="feature-benefits">
              <li>Role-based access control</li>
              <li>Cross-team collaboration</li>
              <li>Communication tools</li>
              <li>Audit trails</li>
            </ul>
          </div>

          <div className="feature-detail-card">
            <div className="feature-detail-icon">🔒</div>
            <div className="feature-detail-title">Secure & Transparent</div>
            <div className="feature-detail-desc">
              Bank-level security for all data. Full transparency with audit logs, ensuring accountability at every step of the complaint resolution.
            </div>
            <ul className="feature-benefits">
              <li>End-to-end encryption</li>
              <li>Data privacy compliance</li>
              <li>Full audit trail</li>
              <li>Accountability tracking</li>
            </ul>
          </div>
        </div>

        <div className="features-stats">
          <div className="stat-box">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">System Uptime</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2.4h</div>
            <div className="stat-label">Avg. Resolution Time</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">95%</div>
            <div className="stat-label">User Satisfaction</div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="roles-section" id="roles">
        <div className="roles-title">Three Ways to Participate</div>
        
        <div className="roles-grid">
          {/* Citizen Role */}
          <div className="role-card">
            <div className="role-badge">CITIZEN</div>
            <div className="role-icon">👤</div>
            <div className="role-name">Citizen Portal</div>
            <div className="role-desc">
              Report civic issues in your area and track resolutions
            </div>
            <ul className="role-features">
              <li>✓ File complaints with photos</li>
              <li>✓ Track complaint status</li>
              <li>✓ View nearby issues</li>
              <li>✓ Submit feedback</li>
            </ul>
            <button 
              className="role-btn" 
              onClick={() => navigate('/register?role=citizen')}
            >
              Register as Citizen
            </button>
          </div>

          {/* Official Role */}
          <div className="role-card">
            <div className="role-badge">OFFICIAL</div>
            <div className="role-icon">👨‍💼</div>
            <div className="role-name">Official Dashboard</div>
            <div className="role-desc">
              Manage and oversee complaint resolution across departments
            </div>
            <ul className="role-features">
              <li>✓ Analytics & KPI tracking</li>
              <li>✓ Department management</li>
              <li>✓ Complaint assignment</li>
              <li>✓ SLA monitoring</li>
            </ul>
            <button 
              className="role-btn" 
              onClick={() => navigate('/register?role=official')}
            >
              Register as Official
            </button>
          </div>

          {/* Worker Role */}
          <div className="role-card">
            <div className="role-badge">WORKER</div>
            <div className="role-icon">👷</div>
            <div className="role-name">Worker Portal</div>
            <div className="role-desc">
              Receive and complete assigned tasks in the field
            </div>
            <ul className="role-features">
              <li>✓ View assigned tasks</li>
              <li>✓ Update task status</li>
              <li>✓ Submit work documentation</li>
              <li>✓ Real-time navigation</li>
            </ul>
            <button 
              className="role-btn" 
              onClick={() => navigate('/register?role=worker')}
            >
              Register as Worker
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-header">
          <h2 className="about-title">About CityPulse</h2>
          <p className="about-subtitle">
            Transforming urban governance through technology, transparency, and community engagement
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>CityPulse</strong> is a revolutionary civic engagement platform designed to bridge the gap between citizens and municipal authorities. We believe every voice matters, and every civic issue deserves attention.
            </p>
            <p>
              Our mission is to create smarter, more responsive cities by enabling citizens to report urban issues with ease, and empowering officials to respond efficiently. Through our intelligent AI-powered system, complaints are automatically categorized, prioritized, and routed to the right departments.
            </p>
            <p>
              Built with cutting-edge technology and a deep understanding of municipal operations, CityPulse has already transformed how cities manage everything from potholes and waterlogging to street lighting and waste management.
            </p>
          </div>
          
          <div>
            <div className="about-highlight">
              <div className="about-highlight-title">🎯 Our Vision</div>
              <div className="about-highlight-desc">
                To build a world where every citizen can report civic issues, and every issue gets resolved transparently and efficiently. We envision cities where technology and community work together to create better living spaces for everyone.
              </div>
            </div>
            
            <div className="about-highlight">
              <div className="about-highlight-title">💡 Our Approach</div>
              <div className="about-highlight-desc">
                We combine human-centric design with powerful AI technology. Every feature is built with feedback from citizens, officials, and field workers to ensure maximum utility and ease of use.
              </div>
            </div>
          </div>
        </div>

        <div className="about-mission">
          <div className="mission-card">
            <div className="mission-icon">🤝</div>
            <div className="mission-title">Community First</div>
            <div className="mission-desc">Empowering citizens to take action in their communities and see real-time impact.</div>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">📊</div>
            <div className="mission-title">Data-Driven</div>
            <div className="mission-desc">Using analytics to identify patterns and enable proactive city management.</div>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">🔄</div>
            <div className="mission-title">Transparent</div>
            <div className="mission-desc">Complete visibility into every issue from reporting through resolution.</div>
          </div>
        </div>

        <div className="about-team">
          <h3 className="about-team-title">Built for Every Stakeholder</h3>
          <p className="about-team-desc">
            CityPulse was designed collaboratively with citizens, municipal officials, and field workers to address real challenges in urban governance. Our platform respects the complexity of municipal operations while keeping the citizen experience simple and intuitive. Every feature, every workflow, and every metric has been thoughtfully crafted to maximize impact and transparency.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-title">Ready to Make a Difference?</div>
        <div className="cta-desc">
          Join thousands of citizens making their cities better, one report at a time
        </div>
        <button className="cta-btn" onClick={() => navigate('/register')}>
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Footer Grid */}
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-logo">City<span>Pulse</span></div>
              <p className="footer-description">
                Transforming urban governance through technology, making cities smarter, one issue at a time.
              </p>
              <div className="footer-socials">
                <a className="social-icon" href="#" title="Twitter">
                  𝕏
                </a>
                <a className="social-icon" href="#" title="Facebook">
                  f
                </a>
                <a className="social-icon" href="#" title="LinkedIn">
                  in
                </a>
                <a className="social-icon" href="#" title="Instagram">
                  📷
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="footer-section">
              <div className="footer-title">Product</div>
              <a className="footer-link" href="#features">Features</a>
              <a className="footer-link" href="#roles">User Roles</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Pricing</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Download</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Changelog</a>
            </div>

            {/* Company Links */}
            <div className="footer-section">
              <div className="footer-title">Company</div>
              <a className="footer-link" href="#about">About Us</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Blog</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Press</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Careers</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Contact</a>
            </div>

            {/* Support & Legal */}
            <div className="footer-section">
              <div className="footer-title">Support</div>
              <a className="footer-link" onClick={() => navigate('/login')}>Documentation</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Help Center</a>
              <a className="footer-link" onClick={() => navigate('/login')}>API Docs</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Community</a>
              <a className="footer-link" onClick={() => navigate('/login')}>Status Page</a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-legal">
              <a className="footer-legal-link" href="#">Privacy Policy</a>
              <a className="footer-legal-link" href="#">Terms of Service</a>
              <a className="footer-legal-link" href="#">Cookie Policy</a>
              <a className="footer-legal-link" href="#">© 2026 CityPulse</a>
            </div>
            <div className="footer-credits">
              Made with ❤️ for better cities | All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
