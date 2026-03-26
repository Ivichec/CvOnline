import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = signal(false);

  isDarkMode = this.darkMode.asReadonly();

  constructor() {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      this.darkMode.set(saved === 'true');
    } else {
      this.darkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    this.applyTheme();
  }

  toggle(): void {
    this.darkMode.set(!this.darkMode());
    localStorage.setItem('darkMode', String(this.darkMode()));
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.darkMode());
  }
}
