import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portal Sampang Satu Data',
    description: 'Aplikasi portal data terintegrasi. Menggunakan React untuk frontend, serta Docker untuk kontainerisasi. Mengintegrasikan Wazuh untuk memantau keamanan.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop',
    tags: ['React', 'Docker'],
    github: '#',
    live: 'https://satudata.sampangkab.go.id/'
  },
  // {
  //   title: 'Otomatisasi CI/CD Pipeline',
  //   description: 'Membangun pipeline CI/CD lengkap menggunakan GitHub Actions dan npm registry untuk deploy aplikasi secara otomatis dengan pemindaian keamanan (SAST/DAST) sebelum rilis.',
  //   image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
  //   tags: ['GitHub Actions', 'NPM', 'Bash', 'Security'],
  //   github: '#',
  //   live: '#'
  // },
  {
    title: 'Keamanan Infrastruktur',
    description: 'Infrastruktur Keamanan menggunakan untuk memvisualisasikan hasil pemindaian kerentanan sistem.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Wazuh'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">Karya & Proyek Terbaru</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-color)' }}>{project.title}</h3>
                <p style={{ color: 'var(--muted-text)', marginBottom: '1rem', flexGrow: 1 }}>{project.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: '500', border: '1px solid var(--border-color)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <FaGithub size={16} /> Kode
                  </a>
                  <a href={project.live} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
