import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
