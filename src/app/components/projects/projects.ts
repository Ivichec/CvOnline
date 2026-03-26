import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Project } from '../../models/cv.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[];

  constructor(private cvService: CvService) {
    this.projects = this.cvService.getProjects();
  }
}
