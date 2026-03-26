import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { PersonalInfo } from '../../models/cv.model';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  info: PersonalInfo;

  constructor(private cvService: CvService) {
    this.info = this.cvService.getPersonalInfo();
  }
}
