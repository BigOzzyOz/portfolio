import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {

  socialLinks = [
    { img: 'github', src: 'https://github.com/BigOzzyOz' },
    { img: 'mail', src: 'mailto:kontakt@jan-holtschke.de' },
    { img: 'linkedin', src: 'https://www.linkedin.com/in/jan-holtschke' },
  ];

}
