import { Injectable, signal, computed } from '@angular/core';
import { CvData } from '../models/cv.model';
import { CV_DATA } from '../data/cv-data';
import { CV_DATA_EN } from '../data/cv-data-en';

export type Lang = 'es' | 'en';

interface Labels {
  about: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
  languages: string;
  courses: string;
  contact: string;
  contactIntro: string;
  viewProfile: string;
  viewRepos: string;
  email: string;
  phone: string;
  downloadCv: string;
  backToTop: string;
  madeWith: string;
}

const LABELS_ES: Labels = {
  about: 'Sobre mí',
  experience: 'Experiencia laboral',
  education: 'Formación académica',
  skills: 'Habilidades técnicas',
  projects: 'Proyectos destacados',
  languages: 'Idiomas',
  courses: 'Cursos',
  contact: 'Contacto',
  contactIntro: '¿Interesado en trabajar juntos? ¡No dudes en contactarme!',
  viewProfile: 'Ver perfil',
  viewRepos: 'Ver repositorios',
  email: 'Email',
  phone: 'Teléfono',
  downloadCv: 'Descargar CV',
  backToTop: 'Volver arriba',
  madeWith: 'CV Online. Hecho con Angular.',
};

const LABELS_EN: Labels = {
  about: 'About me',
  experience: 'Work experience',
  education: 'Education',
  skills: 'Technical skills',
  projects: 'Featured projects',
  languages: 'Languages',
  courses: 'Courses',
  contact: 'Contact',
  contactIntro: 'Interested in working together? Feel free to reach out!',
  viewProfile: 'View profile',
  viewRepos: 'View repositories',
  email: 'Email',
  phone: 'Phone',
  downloadCv: 'Download CV',
  backToTop: 'Back to top',
  madeWith: 'CV Online. Made with Angular.',
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private lang = signal<Lang>('es');

  currentLang = this.lang.asReadonly();

  labels = computed<Labels>(() => this.lang() === 'es' ? LABELS_ES : LABELS_EN);

  cvData = computed<CvData>(() => this.lang() === 'es' ? CV_DATA : CV_DATA_EN);

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'es' || saved === 'en') {
      this.lang.set(saved);
    }
  }

  toggle(): void {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }
}
