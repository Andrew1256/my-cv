import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],  // FormsModule має бути вказаний тут
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'andrijvasilik252@gmail.com';
  message: string = '';

  sendEmail() {
    if ( this.message) {
      const mailtoLink = `mailto:${this.email}?subject=Contact&body=${encodeURIComponent(this.message)}`;
      window.location.href = mailtoLink;
    } else {
      alert('Будь ласка, заповніть усі поля форми.');
    }
  }
}
