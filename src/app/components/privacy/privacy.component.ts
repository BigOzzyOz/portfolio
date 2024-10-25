import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  ls = inject(LanguageService);
  main = inject(MainContentComponent);

  source: string = 'assets/icons/back-arrow.png';

  constructor() { }
}
