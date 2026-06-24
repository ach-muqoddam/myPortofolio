import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const ContactInfo = ({ icon: Icon, title, content }) => (
    <div className="contact-info">
      <div className="contact-icon">
        <Icon size={24} />
      </div>
      <div className="contact-content">
        <h4 className="contact-title">{title}</h4>
        <p className="contact-text">{content}</p>
      </div>
    </div>
  );

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Hubungi Saya</h2>

        <div className="contact-container">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-heading">Mari Berdiskusi</h3>
            <p className="contact-description">
              Saya selalu terbuka untuk mendiskusikan pekerjaan pengembangan produk, kolaborasi proyek keamanan sistem, atau tawaran pekerjaan.
            </p>

            <div className="contact-info-group">
              <ContactInfo icon={Mail} title="Email" content="ach.adam04@gmail.com" />
              <ContactInfo icon={Phone} title="Telepon" content="+62 813 5927 4120" />
              <ContactInfo icon={MapPin} title="Lokasi" content="Sampang, Jawa Timur, Indonesia" />
            </div>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="card contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
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

              <button type="submit" className="btn btn-primary btn-submit">
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        #contact {
          background-color: var(--bg-color);
          padding: 3rem 0;
          width: 100%;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          width: 100%;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }

        .contact-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }

        .contact-heading {
          font-size: 1.5rem;
          margin: 0 0 1.5rem 0;
          color: var(--text-color);
        }

        .contact-description {
          color: var(--muted-text);
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .contact-info-group {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: var(--secondary-bg);
          border-radius: 50%;
          color: var(--primary);
          box-shadow: var(--shadow);
          flex-shrink: 0;
          min-width: 50px;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 1;
          width: 100%;
        }

        .contact-title {
          color: var(--muted-text);
          font-size: 0.875rem;
          margin: 0;
          padding: 0;
        }

        .contact-text {
          color: var(--text-color);
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          padding: 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
          line-height: 1.4;
        }

        .contact-form {
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Tablet - 768px */
        @media (max-width: 768px) {
          #contact {
            padding: 2rem 1rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-heading {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .contact-description {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }

          .contact-info-group {
            gap: 1.25rem;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            min-width: 45px;
          }

          .contact-icon svg {
            width: 20px;
            height: 20px;
          }

          .contact-text {
            font-size: 0.95rem;
          }

          .form-row {
            gap: 1rem;
          }

          .form-group {
            margin-bottom: 0.5rem;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }

        /* Mobile - 480px */
        @media (max-width: 480px) {
          #contact {
            padding: 1.5rem 1rem;
          }

          .contact-container {
            gap: 1.5rem;
          }

          .contact-heading {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
          }

          .contact-description {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .contact-info-group {
            gap: 1rem;
          }

          .contact-info {
            width: 100%;
            align-items: flex-start;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
            flex-shrink: 0;
          }

          .contact-icon svg {
            width: 18px;
            height: 18px;
          }

          .contact-content {
            min-width: 0;
            flex: 1;
            overflow: hidden;
          }

          .contact-title {
            font-size: 0.8rem;
          }

          .contact-text {
            font-size: 0.8rem;
            margin-top: 0.2rem;
            word-break: normal;
            overflow-wrap: break-word;
            line-height: 1.3;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-group {
            margin-bottom: 0.5rem;
          }

          .form-control {
            font-size: 16px !important;
            padding: 0.75rem !important;
          }

          .form-label {
            font-size: 0.85rem;
          }

          .btn-submit {
            font-size: 0.9rem;
            padding: 0.75rem 1rem;
          }

          .contact-form {
            padding: 1.25rem;
          }
        }

        /* Extra small - 360px */
        @media (max-width: 360px) {
          #contact {
            padding: 1rem 0.75rem;
          }

          .contact-icon {
            width: 35px;
            height: 35px;
            min-width: 35px;
          }

          .contact-title {
            font-size: 0.75rem;
          }

          .contact-text {
            font-size: 0.75rem;
          }

          .contact-heading {
            font-size: 1rem;
          }

          .contact-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
