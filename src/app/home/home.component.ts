import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "🌟 Welcome to our Portfolio 🌟";
  paragraphe: string | undefined;

  ngOnInit() {
    this.paragraphe = "Greetings! We are Nadhem Ochi and Hazem Saidani, dedicated web developers passionate about turning imaginative concepts into captivating digital experiences. With an extensive grasp of cutting-edge web technologies, we specialize in delivering innovative solutions that elevate online presence. Whether you are seeking skilled developers for your projects or looking to enhance your team, we are ready to bring our expertise to the table.";
  }
}
