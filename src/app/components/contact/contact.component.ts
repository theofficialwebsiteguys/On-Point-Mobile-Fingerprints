import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = {
    fullName: '',
    phone: '',
    email: '',
    county: '',
    stateId: '',
    oriNumber: '',
    dateTime: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.form);
    // You can send this to your backend via HttpClient
    alert('Appointment request submitted!');
  }
}
