import { Component } from '@angular/core';
import { LandingPageComponent } from "../../components/landing-page/landing-page.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ReferencesComponent } from "../../components/references/references.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
