import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-verification',
  standalone: false,
  
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  otp: string[] = new Array(6).fill('');

  verifyOtp() {
    const enteredOtp = this.otp.join('');
    if (enteredOtp.length !== 6) {
      alert('Please enter a 6-digit OTP.');
      return;
    }

    // Simulated API Call (Replace with actual API integration)
    setTimeout(() => {
      alert('OTP verified successfully!');
    }, 1000);
  }

  moveToNext(event: any, index: number) {
    const value = event.target.value;
    if (value.length === 1 && index < this.otp.length - 1) {
      const nextInput = document.getElementsByName(`otp${index + 1}`)[0] as HTMLInputElement;
      nextInput.focus();
    }
  }



  handleKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      const input = event.target as HTMLInputElement;
      if (input.value === '') {
        event.preventDefault();
        if (index > 0) {
          this.otp[index - 1] = '';
          const prevInput = document.getElementsByName(`otp${index - 1}`)[0] as HTMLInputElement;
          prevInput.focus();
        }
      }
    }
  }


  resendOtp() {
    alert('A new OTP has been sent to your email.');
  }
}