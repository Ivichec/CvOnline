import { Injectable } from '@angular/core';
import { CvData, PersonalInfo, Experience, Education, Skill, Project, Language } from '../models/cv.model';
import { CV_DATA } from '../data/cv-data';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private data: CvData = CV_DATA;

  getPersonalInfo(): PersonalInfo {
    return this.data.personalInfo;
  }

  getExperiences(): Experience[] {
    return this.data.experiences;
  }

  getEducation(): Education[] {
    return this.data.education;
  }

  getSkills(): Skill[] {
    return this.data.skills;
  }

  getSkillsByCategory(): Map<string, Skill[]> {
    const map = new Map<string, Skill[]>();
    for (const skill of this.data.skills) {
      const list = map.get(skill.category) || [];
      list.push(skill);
      map.set(skill.category, list);
    }
    return map;
  }

  getProjects(): Project[] {
    return this.data.projects;
  }

  getLanguages(): Language[] {
    return this.data.languages;
  }
}
