import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ContactDialogComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})

export class ContactFormComponent {
  ls = inject(LanguageService);
  http = inject(HttpClient);

  mailTest: boolean = false;
  errorPrivacy: boolean = false;
  errorText: boolean = false;
  errorEmail: boolean = false;
  errorName: boolean = false;
  privacyAccepted: boolean = false;
  submitSuccess: boolean = false;

  contactMessage = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZäöüÄÖÜß\\s]+$'), Validators.minLength(3), Validators.maxLength(40)]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]),
    privacy: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  post = {
    endPoint: 'https://jan-holtschke.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor() { }


  sendForm() {
    if (this.contactMessage.invalid) this.showError();
    else this.sendMail();
  }


  resetBoolean() {
    this.errorName = false;
    this.errorEmail = false;
    this.errorText = false;
    this.errorPrivacy = false;
  }


  showError() {
    this.errorName = this.contactMessage.controls.name.invalid ? true : false;
    this.errorEmail = this.contactMessage.controls.email.invalid ? true : false;
    this.errorText = this.contactMessage.controls.message.invalid ? true : false;
    this.errorPrivacy = this.contactMessage.controls.privacy.invalid ? true : false;
  }


  sendMail() {
    if (this.prodMode()) this.submitToServer();
    else if (this.testMode()) this.mailSuccess();
  }


  mailSuccess() {
    this.submitSuccess = true;
    this.contactMessage.reset();
    this.resetBoolean();
  }


  submitToServer() {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactMessage.value), this.post.options)
      .subscribe({
        next: (response) => {
          this.mailSuccess();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }


  prodMode() {
    return this.contactMessage.dirty && this.contactMessage.valid && !this.mailTest;
  }


  testMode() {
    return this.contactMessage.dirty && this.contactMessage.valid && this.mailTest;
  }

  checkValidation(error: boolean, validation: {}) {
    if (!error) return false;
    else if (error && validation) return false;
    else if (error && !validation) return true;
    else return true;
  }
}




