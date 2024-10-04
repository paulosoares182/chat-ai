import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
export interface ILogin {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const data: ILogin = this.form.value;
      this.router.navigate(['/chat'])
    } else {
      console.log('Form is not valid', this.form);
    }
  }
}
