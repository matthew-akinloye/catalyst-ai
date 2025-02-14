import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  step = 1;
  form = {
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    experience: '',
    education: '',
    resume: null,
    industry: '',
    jobRole: '',
    careerGoals: '',
    password: '',
    confirmPassword: ''
  };

  nextStep() {
    if (this.step < 4) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  onFileChange(event: any) {
    this.form.resume = event.target.files[0];
  }

  onSubmit() {
    console.log('Registration Data:', this.form);
    // Implement API call to register user
  }

}