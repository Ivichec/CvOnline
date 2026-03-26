import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Language } from '../../models/cv.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  languages: Language[];

  constructor(private cvService: CvService) {
    this.languages = this.cvService.getLanguages();
  }
}
