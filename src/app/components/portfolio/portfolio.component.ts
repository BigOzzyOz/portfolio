import { Component, Input, NgModule } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  @Input() project: Project = {
    name: '',
    technologies: [],
    description: '',
    link: '',
    gitLink: '',
    img: ''
  };

  @Input() index: number = 0;

  constructor(public projectService: ProjectService) { }
}
