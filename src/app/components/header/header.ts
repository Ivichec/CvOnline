import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(protected cvService: CvService) {}
}
