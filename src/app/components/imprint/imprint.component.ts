import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  ls = inject(LanguageService);
  main = inject(MainContentComponent);

  source: string = 'assets/icons/back-arrow.png';

  constructor() { }

}
