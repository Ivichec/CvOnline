import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { CvService } from '../../services/cv.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  constructor(
    protected cvService: CvService,
    protected lang: LanguageService,
  ) {}
}
