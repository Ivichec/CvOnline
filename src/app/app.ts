import { Component, OnInit, OnDestroy, HostListener, effect } from '@angular/core';
import { NgClass } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Languages } from './components/languages/languages';
import { Courses } from './components/courses/courses';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CvPdf } from './components/cv-pdf/cv-pdf';
import { CvService } from './services/cv.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    Navbar,
    Header,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Languages,
    Courses,
    Contact,
    Footer,
    CvPdf,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  showBackToTop = false;
  private typingElement: HTMLElement | null = null;
  private typingTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private cvService: CvService) {
    effect(() => {
      const title = this.cvService.personalInfo().title;
      this.startTyping(title);
    });
  }

  ngOnInit(): void {
    this.setupScrollObserver();
    this.setupSkillBarObserver();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop = window.scrollY > 400;
    this.updateScrollSpy();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  downloadPdf(): void {
    window.print();
  }

  private startTyping(text: string): void {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);

    requestAnimationFrame(() => {
      this.typingElement = document.querySelector('.header__typing');
      if (!this.typingElement) return;
      this.typingElement.textContent = '';

      let i = 0;
      const type = () => {
        if (!this.typingElement) return;
        if (i < text.length) {
          this.typingElement.textContent += text.charAt(i);
          i++;
          this.typingTimeout = setTimeout(type, 80);
        }
      };
      this.typingTimeout = setTimeout(type, 500);
    });
  }

  private setupScrollObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    requestAnimationFrame(() => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    });
  }

  private setupSkillBarObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill__fill');
            fills.forEach((fill) => {
              const level = fill.getAttribute('data-level');
              if (level) {
                (fill as HTMLElement).style.width = level + '%';
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    requestAnimationFrame(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) observer.observe(skillsSection);
    });
  }

  private updateScrollSpy(): void {
    const sections = ['header', 'about', 'experience', 'education', 'skills', 'projects', 'languages', 'courses', 'contact'];
    const scrollPos = window.scrollY + 100;

    let activeId = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        activeId = id;
      }
    }

    document.querySelectorAll('.navbar__menu a').forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + activeId) {
        link.classList.add('active');
      }
    });
  }
}
