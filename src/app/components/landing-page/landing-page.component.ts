import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from "../../shared/social-links/social-links.component";
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  main = inject(MainContentComponent);
  ls = inject(LanguageService);

  constructor() { }

}
