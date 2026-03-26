import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  summary: string;

  constructor(private cvService: CvService) {
    this.summary = this.cvService.getPersonalInfo().summary;
  }
}
