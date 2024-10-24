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

  errorPrivacy: boolean = false;
  errorText: boolean = false;
  errorEmail: boolean = false;
  errorName: boolean = false;
  privacyAccepted: boolean = false;
  submitSuccess: boolean = false;
  contactMessage = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZäöüÄÖÜß\\s]+$')]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    message: new FormControl('', [Validators.required, Validators.minLength(4)]),
    privacy: new FormControl('', [Validators.required, Validators.requiredTrue])
  });
  mailTest = false;
  http = inject(HttpClient);

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

    if (this.contactMessage.invalid) {
      this.errorName = this.contactMessage.controls.name.invalid ? true : false;
      this.errorEmail = this.contactMessage.controls.email.invalid ? true : false;
      this.errorText = this.contactMessage.controls.message.invalid ? true : false;
      this.errorPrivacy = this.contactMessage.controls.privacy.invalid ? true : false;
    } else {
      console.log(this.contactMessage);
      console.log(this.contactMessage.value);
      if (this.contactMessage.dirty && this.contactMessage.valid && !this.mailTest) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactMessage.value), this.post.options)
          .subscribe({
            next: (response) => {
              this.submitSuccess = true;
              this.contactMessage.reset();
              this.resetBoolean();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (this.contactMessage.dirty && this.contactMessage.valid && this.mailTest) {
        this.submitSuccess = true;
        this.contactMessage.reset();
        this.resetBoolean();
      }
    }
  }

  resetBoolean() {
    this.errorName = false;
    this.errorEmail = false;
    this.errorText = false;
    this.errorPrivacy = false;
  }

}




