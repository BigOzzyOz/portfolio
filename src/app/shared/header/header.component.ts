
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from '../../components/main-content/main-content.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  main = inject(MainContentComponent);

  burger: string = 'assets/icons/burger.png';
  burgerMenu: boolean = false;

  headerLinks = [
    { name: 'About me', id: 'aboutMe' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'References', id: 'references' },
    { name: 'Contact', id: 'contact' }
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
