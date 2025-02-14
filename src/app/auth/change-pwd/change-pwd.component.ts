import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-pwd',
  standalone: false,
  
  templateUrl: './change-pwd.component.html',
  styleUrl: './change-pwd.component.scss'
})
export class ChangePwdComponent {
  form = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private router: Router) { }

  changePassword() {
    if (!this.form.oldPassword || !this.form.newPassword || !this.form.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (this.form.newPassword !== this.form.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    // Simulate API call (Replace with actual service call)
    setTimeout(() => {
      alert('Password updated successfully!');
      this.router.navigate(['/']); 
    }, 1000);
  }
}
