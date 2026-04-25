import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '100%', height: '100%', border: '4px solid var(--primary)', borderRadius: '1rem', zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
                alt="Working" 
                style={{ width: '100%', borderRadius: '1rem', position: 'relative', zIndex: 1, boxShadow: 'var(--shadow)' }} 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>Menggabungkan Kode, Infrastruktur, dan Keamanan</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--muted-text)', fontSize: '1.1rem' }}>
              Saya adalah seorang profesional IT multidisiplin dengan keahlian dalam Software Development, Praktik DevOps, dan Keamanan Siber. Saya percaya bahwa keamanan tidak boleh menjadi hal terakhir yang dipikirkan dalam siklus pengembangan perangkat lunak.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--muted-text)', fontSize: '1.1rem' }}>
              Misi saya adalah membangun aplikasi yang inovatif dan andal, mengotomatiskan alur kerja deployment (CI/CD), dan memastikan setiap lapisan sistem terlindungi dari kerentanan modern.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="card" style={{ padding: '1rem' }}>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Pengalaman</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>5+ Tahun</p>
              </div>
              <div className="card" style={{ padding: '1rem' }}>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>Proyek Selesai</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>40+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
