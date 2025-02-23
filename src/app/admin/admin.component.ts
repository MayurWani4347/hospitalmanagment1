import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  hospitalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      contact: [
        '',
        [Validators.required, Validators.pattern(/^\\d{10}$/)] // Validates a 10-digit contact number
      ]
    });
  }

  addHospital(): void {
    if (this.hospitalForm.valid) {
      console.log('Hospital Data:', this.hospitalForm.value);
      // Add logic to send data to the backend API
      this.hospitalForm.reset();
    }
  }
}