import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">Hubungi Saya</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>Mari Berdiskusi</h3>
            <p style={{ color: 'var(--muted-text)', marginBottom: '2rem' }}>
              Saya selalu terbuka untuk mendiskusikan pekerjaan pengembangan produk, kolaborasi proyek keamanan sistem, atau tawaran pekerjaan.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--secondary-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: '500' }}>ach.adam04@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--secondary-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>Telepon</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: '500' }}>+62 813 5927 4120</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--secondary-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>Lokasi</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: '500' }}>Sampang, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="card" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Nama Anda</label>
                  <input type="text" className="form-control" placeholder="Masukkan nama Anda" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Anda</label>
                  <input type="email" className="form-control" placeholder="Masukkan email Anda" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subjek</label>
                <input type="text" className="form-control" placeholder="Subjek pesan" required />
              </div>

              <div className="form-group">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" placeholder="Tulis pesan Anda di sini..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact > .container > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
