import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
