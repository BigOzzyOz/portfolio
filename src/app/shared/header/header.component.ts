
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  burger: string = 'assets/icons/burger.png';
  burgerMenu: boolean = false;

  headerLinks = [
    'About me',
    'Skills',
    'Portfolio',
    'References',
    'Contact'
  ]

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

}
