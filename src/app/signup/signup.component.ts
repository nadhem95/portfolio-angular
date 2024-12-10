import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  WelcomeMessage = false;

  constructor(private infoService: InfoService) {}

  submitForm(signUpForm: any) {
    this.infoService.addInfo(signUpForm.value);
    signUpForm.reset();
    this.WelcomeMessage = true; // Set WelcomeMessage to true after successful form submission
  }
}

