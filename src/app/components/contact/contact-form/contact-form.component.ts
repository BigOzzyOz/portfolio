import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  @Input() name: any;
  @Input() email: any;
  @Input() message: any;
  @Input() privacy: any;
  errorPrivacy: boolean = false;
  errorText: boolean = false;
  errorEmail: boolean = false;
  errorName: boolean = false;
  privacyAccepted: boolean = false;

  constructor() { }

  sendForm($event: SubmitEvent) {
    throw new Error('Method not implemented.');
  }



}
