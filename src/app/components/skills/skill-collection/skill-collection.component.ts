import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-skill-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-collection.component.html',
  styleUrl: './skill-collection.component.scss'
})

export class SkillCollectionComponent {
  ls = inject(LanguageService);

  source: string = 'assets/icons/skills/continually-learning-orange.png'

  skillsKnown: { name: string, img: string }[] = [
    { name: 'Angular', img: 'assets/icons/skills/angular.png' },
    { name: 'Django', img: 'assets/icons/skills/django.png' },
    { name: 'JavaScript', img: 'assets/icons/skills/javascript.png' },
    { name: 'TypeScript', img: 'assets/icons/skills/typescript.png' },
    { name: 'Python', img: 'assets/icons/skills/python.png' },
    { name: 'HTML', img: 'assets/icons/skills/html.png' },
    { name: 'CSS', img: 'assets/icons/skills/css.png' },
    { name: 'SASS', img: 'assets/icons/skills/sass.svg' },
    { name: 'Rest-Api', img: 'assets/icons/skills/api.svg' },
    { name: 'PostgreSQL', img: 'assets/icons/skills/postgre-sql.png' },
    { name: 'SQL', img: 'assets/icons/skills/sql.png' },
    { name: 'Git', img: 'assets/icons/skills/git.png' },
    { name: 'Scrum', img: 'assets/icons/skills/scrum.png' },
    { name: 'Firebase', img: 'assets/icons/skills/firebase.png' },
    { name: 'Materal Design', img: 'assets/icons/skills/material-design.png' },
  ];

  futureSkills: { name: string, img: string }[] = [
    { name: 'Vue.js', img: 'assets/icons/skills/vuejs.svg' },
    { name: 'Redis', img: 'assets/icons/skills/redis.png' },
    { name: 'Linux', img: 'assets/icons/skills/linux.png' },
    { name: 'Heroku', img: 'assets/icons/skills/heroku.png' },
    { name: 'Flask', img: 'assets/icons/skills/flask.png' },
    { name: 'Docker', img: 'assets/icons/skills/docker.png' },
    { name: 'Cloud', img: 'assets/icons/skills/cloud.png' },
    { name: 'RxJS', img: 'assets/icons/skills/rxjs.png' },
    { name: 'Wordpress', img: 'assets/icons/skills/wordpress.png' },
  ]

  skillsToLearn: { name: string, img: string }[] = [
    { name: 'React', img: 'assets/icons/skills/react.svg' },
    { name: 'UI5 & Fiori', img: 'assets/icons/skills/sap.svg' },
  ];

  constructor() { }



}
