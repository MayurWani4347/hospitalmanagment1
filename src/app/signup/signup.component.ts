



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  captcha: string = '';
  captchaError: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail\\.com$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      captchaInput: ['', Validators.required]
    });
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captcha = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    this.signupForm.get('captchaInput')?.reset();
    this.captchaError = false;
  }

  signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    if (this.signupForm.value.captchaInput !== this.captcha) {
      this.captchaError = true;
      this.generateCaptcha();
      return;
    }

    this.userService.signup(this.signupForm.value).subscribe({
      next: () => {
        alert('✅ Signup successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error || '❌ Signup failed. Please try again.');
        console.error('Signup Error:', err);
      }
    });
  }
}