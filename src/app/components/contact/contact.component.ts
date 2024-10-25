import { Component, inject } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  ls = inject(LanguageService);

}
