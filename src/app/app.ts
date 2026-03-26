import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Languages } from './components/languages/languages';
import { Courses } from './components/courses/courses';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Header,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Languages,
    Courses,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
