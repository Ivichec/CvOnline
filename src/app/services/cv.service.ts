import { Injectable, computed } from '@angular/core';
import { Skill } from '../models/cv.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  personalInfo = computed(() => this.lang.cvData().personalInfo);
  experiences = computed(() => this.lang.cvData().experiences);
  education = computed(() => this.lang.cvData().education);
  skills = computed(() => this.lang.cvData().skills);
  projects = computed(() => this.lang.cvData().projects);
  languages = computed(() => this.lang.cvData().languages);
  courses = computed(() => this.lang.cvData().courses);

  skillsByCategory = computed(() => {
    const map = new Map<string, Skill[]>();
    for (const skill of this.lang.cvData().skills) {
      const list = map.get(skill.category) || [];
      list.push(skill);
      map.set(skill.category, list);
    }
    return map;
  });

  constructor(private lang: LanguageService) {}
}
