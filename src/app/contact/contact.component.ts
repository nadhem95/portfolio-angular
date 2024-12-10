import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  envoyer(){
    alert('Votre message a été envoyer');
  }
  title1='ENTRER EN CONTACT';
  paragraphe1='hey! Nous sommes impatients de démarrer un projet avec vous!';
}
