import { CvData } from '../models/cv.model';

export const CV_DATA: CvData = {
  personalInfo: {
    name: 'Iván Checa García',
    title: 'Software Developer',
    photo: '',
    email: 'ivanchecag2004@gmail.com',
    phone: '+34 611104558',
    location: 'Madrid, España',
    linkedin: 'https://www.linkedin.com/in/ivanchecagarcia/',
    github: 'https://github.com/Ivichec',
    summary:
      'Desarrollador Full Stack con experiencia en Angular, .NET y Node.js. Especializado en aplicaciones web eficientes, bases de datos relacionales (SQL Server/Oracle), integración continua con Jenkins y visualización de datos. Fuerte enfoque en código limpio, responsive design y trabajo colaborativo.',
  },
  experiences: [
    {
      position: 'Software Developer',
      company: 'Patrimonio Nacional',
      location: 'Madrid',
      startDate: '09/2024',
      endDate: 'Actualidad',
      description:
        'Desarrollo de aplicaciones web para el sector público.',
      achievements: [
        'Desarrollo de aplicaciones web para el sector público, utilizando Angular con TypeScript para la lógica del frontend y Bootstrap para construir interfaces modernas, accesibles y adaptativas',
        'Maquetación web para estructurar componentes reutilizables en Angular, asegurando diseños responsive y una experiencia consistente en distintos dispositivos',
        'Implementación de servicios backend mediante .NET bajo una arquitectura de microservicios, desarrollando APIs RESTful robustas y mantenibles',
        'Diseño y normalización de bases de datos relacionales en SQL Server y Oracle, desarrollando consultas eficientes y procedimientos almacenados para garantizar alto rendimiento y consistencia de datos',
        'Despliegue de aplicaciones en entornos de preproducción y producción a través de servidores Windows con IIS',
        'Automatización de procesos con Jenkins, diseñando y manteniendo pipelines de integración continua y despliegue continuo (CI/CD)',
        'Participación activa en reuniones con clientes del sector público para la recolección de requerimientos, validación funcional y planificación de entregas técnicas',
      ],
    },
    {
      position: 'Desarrollador Web',
      company: 'Biosoft Innovation',
      location: 'Madrid',
      startDate: '03/2023',
      endDate: '10/2023',
      description:
        'Desarrollo de visualizaciones e interfaces web.',
      achievements: [
        'Desarrollo de visualizaciones interactivas utilizando Vega, facilitando el análisis visual de grandes volúmenes de datos',
        'Implementación de tablas dinámicas con Datatables, mejorando la navegación, filtrado y exportación de información en interfaces web',
        'Desarrollo de interfaces web modernas, optimizadas para distintos dispositivos y navegadores, aplicando buenas prácticas de accesibilidad y usabilidad',
        'Integración y transformación de datos con Node.js y PHP, automatizando flujos de trabajo y mejorando la eficiencia del sistema',
        'Colaboración con equipos de diseño y backend para asegurar una integración fluida entre componentes visuales y servicios de datos',
      ],
    },
  ],
  education: [
    {
      degree: 'Programa 42 Madrid',
      institution: 'Telefónica',
      location: 'Madrid',
      startDate: '2024',
      endDate: '2026',
      description:
        'Programa de formación en desarrollo de software basado en metodología peer-to-peer y proyectos prácticos.',
    },
    {
      degree: 'Grado Superior de Desarrollo de Aplicaciones Web',
      institution: 'IES Clara del Rey',
      location: 'Madrid',
      startDate: '2021',
      endDate: '2023',
      description:
        'Formación en desarrollo web full stack, bases de datos, despliegue de aplicaciones y metodologías ágiles.',
    },
  ],
  skills: [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'Bootstrap', level: 80, category: 'Frontend' },
    { name: 'Java', level: 75, category: 'Backend' },
    { name: '.NET C#', level: 80, category: 'Backend' },
    { name: 'Python', level: 70, category: 'Backend' },
    { name: 'PHP', level: 65, category: 'Backend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'JSON', level: 85, category: 'Backend' },
    { name: 'Oracle', level: 75, category: 'Bases de datos' },
    { name: 'MySQL', level: 75, category: 'Bases de datos' },
    { name: 'MongoDB', level: 65, category: 'Bases de datos' },
    { name: 'Jenkins', level: 70, category: 'DevOps' },
  ],
  projects: [
    {
      name: 'CV Online',
      description:
        'Portafolio personal desarrollado con Angular, diseño responsive y modo oscuro.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/Ivichec/CvOnline',
      demoUrl: '',
      image: '',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo', certification: '' },
    { name: 'Inglés', level: 'C1', certification: '' },
    { name: 'Alemán', level: 'Básico', certification: '' },
  ],
  courses: [
    { name: 'Desarrollo de aplicaciones móviles con Android' },
    { name: 'Desarrollo de videojuegos en realidad virtual con Unity 3D' },
    { name: 'Desarrollo y visualización de datos con Python y Django' },
  ],
};
