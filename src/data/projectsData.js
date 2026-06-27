import projectImage1 from '../assets/satudataproject.png';
import projectImage2 from '../assets/wazuhproject.png';
import projectImage3 from '../assets/serverproxmox.png';
import projectImage4 from '../assets/rsmzweb.png';

export const projectsData = [
  {
    title: 'Web Pemerintahan Kabupaten Sampang',
    description: 'Arsitektur Microservices untuk Aplikasi pada Organisasi Perangkat Daerah Badan, Dinas, Rumah Sakit, Puskesmas, Kelurahan, Desa, Sekolah.',
    image: projectImage4,
    tags: ['React', 'PHP', 'Jenkins', 'Docker', 'Nginx', 'MySQL', 'Github'],
    isPublic: true,
    github: '#',
    live: 'https://rsmz.sampangkab.go.id/',
  },
  {
    title: 'Portal Sampang Satu Data',
    description: 'Aplikasi portal data Pemerintah Kabupaten Sampang terintegrasi dengan Satu Data Indonesia, Open Data Jawa Timur, Badan Pusat Statistik Sampang.',
    image: projectImage1,
    tags: ['React', 'Express', 'Docker'],
    isPublic: true,
    github: '#',
    live: 'https://satudata.sampangkab.go.id/',
  },
  {
    title: 'Tools SIEM',
    description: 'Perangkat Keamanan untuk monitoring, analisis, pelaporan serangan dan kerentanan sistem.',
    image: projectImage2,
    tags: ['Wazuh'],
    isPublic: false,
    github: '#',
    live: '#',
  },
  {
    title: 'Manajemen Server',
    description: 'Bertanggung jawab untuk mengelola, memelihara, dan mengawasi ruang server.',
    image: projectImage3,
    tags: ['SysAdmin', 'Proxmox', 'Linux'],
    isPublic: false,
    github: '#',
    live: '#',
  }
];
