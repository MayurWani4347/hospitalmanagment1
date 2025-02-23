import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.valid) {
      this.userService.forgetPassword(this.form.value.email).subscribe({
        next: (msg) => alert(msg),
        error: () => alert('Error sending reset link')
      });
    }
  }
}
