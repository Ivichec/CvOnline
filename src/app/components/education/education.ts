import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Education as EducationModel } from '../../models/cv.model';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education: EducationModel[];

  constructor(private cvService: CvService) {
    this.education = this.cvService.getEducation();
  }
}
