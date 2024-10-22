import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ContactDialogComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {

  errorPrivacy: boolean = false;
  errorText: boolean = false;
  errorEmail: boolean = false;
  errorName: boolean = false;
  privacyAccepted: boolean = false;
  submitSuccess: boolean = false;
  contactMessage = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\s]+$')]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    message: new FormControl('', [Validators.required]),
    privacy: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  constructor() { }

  sendForm() {
    if (this.contactMessage.invalid) {
      this.errorName = this.contactMessage.controls.name.invalid ? true : false;
      this.errorEmail = this.contactMessage.controls.email.invalid ? true : false;
      this.errorText = this.contactMessage.controls.message.invalid ? true : false;
      this.errorPrivacy = this.contactMessage.controls.privacy.invalid ? true : false;
    } else {
      this.submitSuccess = true;
      this.resetBoolean();
      this.contactMessage.reset();
    }
  }

  resetBoolean() {
    this.errorName = false;
    this.errorEmail = false;
    this.errorText = false;
    this.errorPrivacy = false;
  }

}




