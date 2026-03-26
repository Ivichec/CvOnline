import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { CvService } from '../../services/cv.service';
import { Skill } from '../../models/cv.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillsByCategory: Map<string, Skill[]>;

  constructor(private cvService: CvService) {
    this.skillsByCategory = this.cvService.getSkillsByCategory();
  }
}
