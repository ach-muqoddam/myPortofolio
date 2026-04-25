import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Sekarang',
    role: 'Tenaga Ahli IT',
    company: 'Dinas Komunikasi Dan Informatika Kabupaten Sampang.',
    description: 'Menjaga Keamanan Sistem Pemerintahan dan Mengelola Infrastruktur IT, Melakukan Troubleshooting Pada Sistem Pemerintahan, Mengembangkan Aplikasi Web Untuk Membantu Proses Pelayanan Publik'
  },
  {
    year: '2023 - 2023',
    role: 'Staff IT',
    company: 'UPTD Puskesmas Banyuates',
    description: 'Pengelolaan Website, Mendukung proses pengarsipan data dan melakukan entry-data pada sistem, Bertanggung jawab menjaga dan memperbarui data setiap bulan.'
  },
  {
    year: '2016 - 2016',
    role: 'Staff IT',
    company: 'STIKES Ngudia Husada Madura',
    description: 'Analisa data untuk mendukung keputusan operasional, Memperbaiki komputer, Instalasi Operating Sistem, Pengelolan Laboratorium Komputer, Pemasangan Camera CCTV.'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="container">
        <h2 className="section-title">Pengalaman Kerja</h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px' }}></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{ position: 'relative', paddingLeft: '60px', marginBottom: '3rem' }}
            >
              {/* Timeline Dot */}
              <div style={{ position: 'absolute', left: '12px', top: '5px', width: '20px', height: '20px', backgroundColor: 'var(--primary)', borderRadius: '50%', border: '4px solid var(--secondary-bg)', zIndex: 1, boxShadow: '0 0 0 4px var(--bg-color)' }}></div>

              <div className="card">
                <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', color: 'var(--primary)', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {exp.year}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-color)' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--muted-text)', marginBottom: '1rem', fontWeight: '500' }}>{exp.company}</h4>
                <p style={{ color: 'var(--muted-text)' }}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
