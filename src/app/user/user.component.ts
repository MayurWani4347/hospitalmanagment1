import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  hospitals = [
    { name: 'City Hospital', location: 'Downtown', contact: '123-456-7890' },
    { name: 'Green Valley Clinic', location: 'Greenwood', contact: '987-654-3210' },
    { name: 'Sunrise Medical Center', location: 'East End', contact: '555-888-1212' },
    { name: 'City Hospital', location: 'Downtown', contact: '123-456-7890' },
    { name: 'Green Valley Clinic', location: 'Greenwood', contact: '987-654-3210' },
    { name: 'Sunrise Medical Center', location: 'East End', contact: '555-888-1212' },
  ];

  ngOnInit(): void {}

  selectHospital(hospital: any) {
    alert(`Selected hospital: ${hospital.name}\nCreate prescription page coming soon!`);
  }
}