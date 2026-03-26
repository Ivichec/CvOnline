import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
