import { Component } from '@angular/core';
import { SkillCollectionComponent } from "./skill-collection/skill-collection.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCollectionComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
