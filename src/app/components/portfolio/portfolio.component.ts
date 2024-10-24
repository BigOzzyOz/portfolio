import { Component, inject, Input, NgModule } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  ls = inject(LanguageService);

  @Input() project: Project = {
    name: '',
    technologies: [],
    description: {},
    link: '',
    gitLink: '',
    img: ''
  };

  @Input() index: number = 0;
  @Input() disabled: boolean = false;
  @Input() language: string = '';

  constructor(public projectService: ProjectService) { }
}
