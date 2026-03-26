import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Experience as ExperienceModel } from '../../models/cv.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceModel[];

  constructor(private cvService: CvService) {
    this.experiences = this.cvService.getExperiences();
  }
}
