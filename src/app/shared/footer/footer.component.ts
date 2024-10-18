import { Component } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./../../../style/styles.scss', './footer.component.scss',]
})
export class FooterComponent {

}
