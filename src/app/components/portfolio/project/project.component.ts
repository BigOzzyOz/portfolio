import { Component, inject, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {
  ls = inject(LanguageService);
  projectService = inject(ProjectService);

  @Input() index: number = 0;
  @Input() disabled: boolean = false;
  @Input() language: string = '';
  @Input() project: Project = {
    name: '',
    technologies: [],
    description: {},
    link: '',
    gitLink: '',
    img: ''
  };


  constructor() { }

}
