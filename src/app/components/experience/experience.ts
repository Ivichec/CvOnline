import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
