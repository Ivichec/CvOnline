import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { PersonalInfo } from '../../models/cv.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  info: PersonalInfo;

  constructor(private cvService: CvService) {
    this.info = this.cvService.getPersonalInfo();
  }
}
