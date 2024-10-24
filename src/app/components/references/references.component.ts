import { Component, inject, Input } from '@angular/core';
import { ReferencesService } from '../../services/references.service';
import { References } from '../../interfaces/references';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  ls = inject(LanguageService);
  ref = inject(ReferencesService);

  currentRef: References = {
    name: {},
    ref: {},
    img: ''
  };

  nextRef: References = {
    name: {},
    ref: {},
    img: ''
  };

  currentRefIndex: number = 0;
  source: string = '';
  nextImgSource: string = '';
  animate: boolean = false;
  animateLeft: boolean = false;
  animateClick: boolean = false;
  animateRight: boolean = false;
  timeOut: any;

  constructor() {
    this.getReferences(this.currentRefIndex);
  }

  getReferences(index: number) {
    this.currentRef = this.ref.references[index];
    this.currentRefIndex = index;
    this.resetBoolean();
    this.timeOut = setTimeout(() => {
      this.previous(this.currentRefIndex + 1 === this.ref.references.length ? 0 : this.currentRefIndex + 1)
    }, 15000);
  }

  next(index: number) {
    this.prepareChange(index);
    this.animateRight = true;
    setTimeout(() => this.getReferences(index), 1450);
  }

  previous(index: number) {
    this.prepareChange(index);
    this.animateLeft = true;
    setTimeout(() => this.getReferences(index), 1450);
  }

  click(index: number) {
    this.prepareChange(index);
    this.nextRef = this.ref.references[index];
    this.animateClick = true;
    setTimeout(() => this.getReferences(index), 1450);
  }

  prepareChange(index: number) {
    this.timeOut ? clearInterval(this.timeOut) : '';
    this.nextImgSource = this.ref.references[index].img;
    this.animate = true;
  }

  resetBoolean() {
    this.animateClick = false;
    this.animateLeft = false;
    this.animateRight = false;
    this.animate = false;
  }
}

