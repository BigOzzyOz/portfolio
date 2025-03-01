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


  ngOnInit(): void {
    if (window.location.search.includes('scrollTo=')) {
      const anchor = window.location.search.split('scrollTo=')[1];
      setTimeout(() => this.scrollTo(anchor, 0), 600);
    }
  }


  scrollTo(anchor: string, offset: number = 0) {
    const currentPath = window.location.pathname;
    if (currentPath === '/' || anchor === 'home') this.scrollOnPage(anchor, offset);
    else window.location.href = '/?scrollTo=' + anchor;
  }


  scrollOnPage(anchor: string, offset: number = 0) {
    let element = document.getElementById(anchor);
    let elementPosition = element!.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - offset;
    this.setNewURL();
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }


  setNewURL() {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    params.delete('scrollTo');
    window.history.replaceState({}, '', url.toString());
  }
}
