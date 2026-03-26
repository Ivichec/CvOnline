import { Component } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Course } from '../../models/cv.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  courses: Course[];

  constructor(private cvService: CvService) {
    this.courses = this.cvService.getCourses();
  }
}
