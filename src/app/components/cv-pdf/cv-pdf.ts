import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cv-pdf',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './cv-pdf.html',
  styleUrl: './cv-pdf.scss',
})
export class CvPdf {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}

  get skillsByCategory(): Map<string, string[]> {
    const map = new Map<string, string[]>();
    for (const skill of this.cvService.skills()) {
      const list = map.get(skill.category) || [];
      list.push(skill.name);
      map.set(skill.category, list);
    }
    return map;
  }
}
