import { CvData } from '../models/cv.model';

export const CV_DATA_EN: CvData = {
  personalInfo: {
    name: 'Iván Checa García',
    title: 'Software Developer',
    photo: '',
    email: 'ivanchecag2004@gmail.com',
    phone: '+34 611104558',
    location: 'Madrid, Spain',
    linkedin: 'https://linkedin.com/in/iv%C3%A1n-checa',
    github: 'https://github.com/Ivichec',
    summary:
      'Full Stack Developer with experience in Angular, .NET and Node.js. Specialized in efficient web applications, relational databases (SQL Server/Oracle), continuous integration with Jenkins and data visualization. Strong focus on clean code, responsive design and collaborative work.',
  },
  experiences: [
    {
      position: 'Software Developer',
      company: 'Patrimonio Nacional',
      location: 'Madrid',
      startDate: '09/2024',
      endDate: 'Present',
      description:
        'Web application development for the public sector.',
      achievements: [
        'Development of web applications for the public sector, using Angular with TypeScript for frontend logic and Bootstrap to build modern, accessible and adaptive interfaces',
        'Web layout to structure reusable components in Angular, ensuring responsive designs and a consistent experience across different devices',
        'Implementation of backend services using .NET under a microservices architecture, developing robust and maintainable RESTful APIs',
        'Design and normalization of relational databases in SQL Server and Oracle, developing efficient queries and stored procedures to ensure high performance and data consistency',
        'Application deployment in pre-production and production environments through Windows servers with IIS',
        'Process automation with Jenkins, designing and maintaining continuous integration and continuous deployment (CI/CD) pipelines',
        'Active participation in meetings with public sector clients for requirements gathering, functional validation and technical delivery planning',
      ],
    },
    {
      position: 'Web Developer',
      company: 'Biosoft Innovation',
      location: 'Madrid',
      startDate: '03/2023',
      endDate: '10/2023',
      description:
        'Development of visualizations and web interfaces.',
      achievements: [
        'Development of interactive visualizations using Vega, facilitating visual analysis of large data volumes',
        'Implementation of dynamic tables with Datatables, improving navigation, filtering and data export in web interfaces',
        'Development of modern web interfaces, optimized for different devices and browsers, applying best practices in accessibility and usability',
        'Data integration and transformation with Node.js and PHP, automating workflows and improving system efficiency',
        'Collaboration with design and backend teams to ensure seamless integration between visual components and data services',
      ],
    },
  ],
  education: [
    {
      degree: '42 Madrid Program',
      institution: 'Telefónica',
      location: 'Madrid',
      startDate: '2024',
      endDate: '2026',
      description:
        'Software development training program based on peer-to-peer methodology and practical projects.',
    },
    {
      degree: 'Higher Degree in Web Application Development',
      institution: 'IES Clara del Rey',
      location: 'Madrid',
      startDate: '2021',
      endDate: '2023',
      description:
        'Training in full stack web development, databases, application deployment and agile methodologies.',
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
    { name: 'Oracle', level: 75, category: 'Databases' },
    { name: 'MySQL', level: 75, category: 'Databases' },
    { name: 'MongoDB', level: 65, category: 'Databases' },
    { name: 'Jenkins', level: 70, category: 'DevOps' },
  ],
  projects: [
    {
      name: 'CV Online',
      description:
        'Personal portfolio developed with Angular, responsive design and dark mode.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/Ivichec/CvOnline',
      demoUrl: '',
      image: '',
    },
  ],
  languages: [
    { name: 'Spanish', level: 'Native', certification: '' },
    { name: 'English', level: 'C1', certification: '' },
    { name: 'German', level: 'Basic', certification: '' },
  ],
  courses: [
    { name: 'Mobile application development with Android' },
    { name: 'Virtual reality game development with Unity 3D' },
    { name: 'Data development and visualization with Python and Django' },
  ],
};
