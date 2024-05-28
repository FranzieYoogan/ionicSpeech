import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderPage],
})
export class Tab1Page {
  constructor() {}

  speech() {

    const text:any = document.getElementById('text')

    if(text.value) {


 

    const synth = window.speechSynthesis;
let speech = text.value
const utterThis = new SpeechSynthesisUtterance(speech);
 synth.speak(utterThis);

text.style.border = "2px solid #5a557c"
} else {


  const synth = window.speechSynthesis;
  let speech = "cualé, escreve aí, véi"
  const utterThis = new SpeechSynthesisUtterance(speech);
   synth.speak(utterThis);

  text.style.border = "2px solid red"

}

  }

}
