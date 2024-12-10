// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_portfolio';

  constructor(private router: Router) {}

  onAbout() {
    this.router.navigate(['about']);
  }

  onContact() {
    this.router.navigate(['contact']);
  }

  onNadhemHazem() {
    this.router.navigate(['nadhem.hazem']);
  }

  onHome() {
    this.router.navigate(['home']);
  }

  onSignup() {
    this.router.navigate(['signup']);
  }
}
