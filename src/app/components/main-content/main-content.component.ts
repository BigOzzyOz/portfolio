import { Component, Injectable } from '@angular/core';
import { LandingPageComponent } from "../../components/landing-page/landing-page.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ReferencesComponent } from "../../components/references/references.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
@Injectable({ providedIn: 'root' })
export class MainContentComponent {

  constructor() { }

  scrollTo(anchor: string) {
    let element = document.getElementById(anchor);
    let headerOffset = 0;
    let elementPosition = element!.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
