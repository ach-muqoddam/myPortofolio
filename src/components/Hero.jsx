import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '70px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Halo, saya</h2>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            ACH. MUQODDAM
          </h1>
          <h3 style={{ fontSize: '2rem', color: 'var(--muted-text)', marginBottom: '1.5rem' }}>
            Programmer, DevOps & Cybersecurity
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-text)', marginBottom: '2rem', maxWidth: '500px' }}>
            Lulusan S1 Sistem Informasi dari Universitas Trunojoyo yang bersemangat untuk berkarir di bidang IT. Berbekal kemampuan orientasi detail dan antusiasme tinggi dalam mempelajari hal keahlian teknis.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <a href="#contact" className="btn btn-primary">
              Hubungi Saya <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn btn-outline">
              Lihat Proyek
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:ach.adam04@gmail.com" style={{ color: 'var(--text-color)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* Placeholder for an awesome hero image or abstract shape */}
          <div style={{
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, var(--primary), var(--accent))',
            boxShadow: 'var(--shadow-hover)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px', backgroundColor: 'var(--bg-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Coding Setup" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', opacity: 0.8 }} />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          #home .container > div:first-child p {
            margin: 0 auto 2rem auto !important;
          }
          #home .container > div:first-child > div:nth-of-type(1), 
          #home .container > div:first-child > div:nth-of-type(2) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
