import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
