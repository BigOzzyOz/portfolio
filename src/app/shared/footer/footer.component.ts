import { Component, inject } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { MainContentComponent } from '../../components/main-content/main-content.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./../../../style/styles.scss', './footer.component.scss',]
})

export class FooterComponent {
  main = inject(MainContentComponent)
}
