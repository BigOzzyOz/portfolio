import { Component, inject } from '@angular/core';
import { SkillCollectionComponent } from "./skill-collection/skill-collection.component";
import { MainContentComponent } from '../main-content/main-content.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCollectionComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  main = inject(MainContentComponent);
  ls = inject(LanguageService);

  constructor() { }

}
