
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  ls = inject(LanguageService);
  main = inject(MainContentComponent);

  srcLanguage: string = 'assets/icons/globe.png';
  languageBurger: boolean = false;
  burger: string = 'assets/icons/burger.png';
  burgerMenu: boolean = false;
  headerLinks: string[] = ['aboutMe', 'skills', 'portfolio', 'references', 'contact'];


  constructor() { }

  toggleBurger(e: Event) {
    if (e.type === 'mouseout') this.burger = this.burgerMenu ? 'assets/icons/close-final.png' : 'assets/icons/burger.png';
    else if (e.type === 'mouseover') this.burger = this.burgerMenu ? 'assets/icons/close-medium.png' : 'assets/icons/burger-transition.png';
    else if (e.type === 'click') {
      this.burger = !this.burgerMenu ? 'assets/icons/close-medium.png' : 'assets/icons/burger-transition.png';
      setTimeout(() => {
        this.burgerMenu = !this.burgerMenu;
        this.burger = this.burgerMenu ? 'assets/icons/close-final.png' : 'assets/icons/burger.png';
      }, 125);
    }
  }


  checkBurgerMenu() {
    this.languageBurger = false;
    this.burgerMenu = false;
    this.burger = this.burgerMenu ? 'assets/icons/close-final.png' : 'assets/icons/burger.png'
  }
}
