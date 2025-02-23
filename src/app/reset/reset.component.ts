import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      token: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  reset() {
    if (this.form.valid) {
      const { token, newPassword } = this.form.value;
      this.userService.resetPassword(token, newPassword).subscribe({
        next: (msg) => {
          alert(msg);
          this.router.navigate(['/login']);
        },
        error: () => alert('Invalid or expired token')
      });
    }
  }
}
