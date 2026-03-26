import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
  personalInfo: {
    name: 'Tu Nombre',
    title: 'Desarrollador Full Stack',
    photo: 'assets/images/profile.jpg',
    email: 'tu@email.com',
    phone: '+34 600 000 000',
    location: 'Madrid, España',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario',
    summary:
      'Desarrollador Full Stack con experiencia en Angular, Spring Boot y tecnologías cloud. Apasionado por crear soluciones elegantes y escalables.',
  },
  experiences: [
    {
      position: 'Desarrollador Full Stack Senior',
      company: 'Empresa Ejemplo S.L.',
      location: 'Madrid, España',
      startDate: '2022-01',
      endDate: 'Actualidad',
      description:
        'Desarrollo de aplicaciones web con Angular y Spring Boot.',
      achievements: [
        'Lideré la migración de AngularJS a Angular 17',
        'Reduje el tiempo de carga un 40% optimizando lazy loading',
        'Implementé pipeline CI/CD con Jenkins y Docker',
      ],
    },
    {
      position: 'Desarrollador Backend',
      company: 'Otra Empresa S.A.',
      location: 'Barcelona, España',
      startDate: '2019-06',
      endDate: '2021-12',
      description: 'Desarrollo de microservicios con Spring Boot y Kafka.',
      achievements: [
        'Diseñé arquitectura de microservicios para el sistema de pagos',
        'Implementé tests de integración con Testcontainers',
        'Mentoricé a 3 desarrolladores junior',
      ],
    },
  ],
  education: [
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad Ejemplo',
      location: 'Madrid, España',
      startDate: '2015',
      endDate: '2019',
      description:
        'Especialización en Ingeniería del Software. TFG sobre aplicaciones web progresivas.',
    },
    {
      degree: 'Máster en Desarrollo Web',
      institution: 'Centro de Formación',
      location: 'Online',
      startDate: '2019',
      endDate: '2020',
      description: 'Máster especializado en Angular, React y Node.js.',
    },
  ],
  skills: [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS/SCSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'Java', level: 85, category: 'Backend' },
    { name: 'Spring Boot', level: 80, category: 'Backend' },
    { name: 'SQL / PostgreSQL', level: 75, category: 'Backend' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'DevOps' },
    { name: 'Jenkins / CI-CD', level: 65, category: 'DevOps' },
  ],
  projects: [
    {
      name: 'CV Online',
      description:
        'Portafolio personal desarrollado con Angular, diseño responsive y modo oscuro.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/tu-usuario/cv-online',
      demoUrl: 'https://tu-usuario.github.io/cv-online',
      image: 'assets/images/project-cv.png',
    },
    {
      name: 'Task Manager API',
      description:
        'API REST para gestión de tareas con autenticación JWT y documentación Swagger.',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      repoUrl: 'https://github.com/tu-usuario/task-manager',
      demoUrl: '',
      image: 'assets/images/project-api.png',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo', certification: '' },
    { name: 'Inglés', level: 'B2 - Upper Intermediate', certification: 'Cambridge FCE' },
    { name: 'Francés', level: 'A2 - Básico', certification: '' },
  ],
};
