import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-pwd',
  standalone: false,
  
  templateUrl: './reset-pwd.component.html',
  styleUrl: './reset-pwd.component.scss'
})
export class ResetPwdComponent {
  email: string = '';

  resetPassword() {
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }

    // Simulated API Call (Replace with actual API integration)
    setTimeout(() => {
      alert('A password reset link has been sent to your email.');
    }, 1000);
  }

}
