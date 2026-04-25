import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary-bg)', padding: '3rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 'bold' }}>ACH. MUQODDAM</h2>
        <p style={{ color: 'var(--muted-text)', marginBottom: '2rem', maxWidth: '400px' }}>
          Membangun solusi perangkat lunak yang aman, modern, dan scalable.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="#" style={{ color: 'var(--muted-text)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted-text)'}>
            <FaGithub size={20} />
          </a>
          <a href="#" style={{ color: 'var(--muted-text)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted-text)'}>
            <FaLinkedin size={20} />
          </a>
          <a href="#" style={{ color: 'var(--muted-text)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted-text)'}>
            <FaTwitter size={20} />
          </a>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '2rem' }}></div>

        <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()}. All rights reserved. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
