import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (res) => {
          alert('Login successful!');
          res.role === 'ADMIN' ? this.router.navigate(['/admin']) : this.router.navigate(['/user']);
        },
        error: () => alert('Invalid credentials')
      });
    }
  }
}