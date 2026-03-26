import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
