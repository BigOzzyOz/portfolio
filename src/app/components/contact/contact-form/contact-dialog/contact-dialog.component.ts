import { Component, ElementRef, HostListener } from '@angular/core';
import { ContactFormComponent } from '../contact-form.component';

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {

  constructor(private elementRef: ElementRef, public contactForm: ContactFormComponent) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  closeModal() {
    this.contactForm.submitSuccess = false;
  }

}
