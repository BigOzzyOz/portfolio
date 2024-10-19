import { Component, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {

  @Input() project: Project = {
    name: '',
    technologies: [],
    description: '',
    link: '',
    gitLink: '',
    img: ''
  }
  @Input() index: number = 0;
  @Input() disabled: boolean = false;

  constructor(public projectService: ProjectService) { }

}
