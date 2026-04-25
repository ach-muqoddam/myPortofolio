import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Development (Programmer)',
    skills: [
      { name: 'React & Next.js', level: 90 },
      { name: 'Node.js & Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Go', level: 70 },
    ]
  },
  {
    title: 'DevOps & CI/CD',
    skills: [
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'Jenkins / GitHub Actions', level: 90 },
      { name: 'AWS / Azure', level: 80 },
      { name: 'Terraform', level: 75 },
    ]
  },
  {
    title: 'Cybersecurity',
    skills: [
      { name: 'Penetration Testing', level: 80 },
      { name: 'Web Security (OWASP)', level: 85 },
      { name: 'Network Security', level: 75 },
      { name: 'Wazuh & SIEM', level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="container">
        <h2 className="section-title">Keahlian Utama</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: 'var(--muted-text)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
