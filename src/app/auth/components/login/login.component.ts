
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSpinning: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private message: NzMessageService,
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;

    // Check for admin credentials
    if (email === 'admin@test.com' && password === 'admin') {
      StorageService.saveUser({ id: 1, role: 'ADMIN' });
      StorageService.saveToken('admin-token');
      this.router.navigateByUrl('/admin/dashboard');
      return;
    }

    // Check for customer credentials (modify this condition as needed)
    if (email && password) {
      StorageService.saveUser({ id: 2, role: 'CUSTOMER' });
      StorageService.saveToken('customer-token');
      this.router.navigateByUrl('/customer/dashboard');
      return;
    }

    // If no valid credentials, show an error message
    this.message.error('Invalid credentials', { nzDuration: 5000 });
  }
}

  



