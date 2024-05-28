import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngOnInit(): void {
    const tab1:any = document.getElementById('tab1')
    const tab2:any = document.getElementById('tab2')

    if(window.location.href == "tabs/tab1") {

      tab2.style.color = "black"
      tab1.style.color = "#5a557c"
    }

    if(window.location.href == "tabs/tab2") {

      tab2.style.color = "#5a557c"
      tab1.style.color = "black"
    }

  }

  

  tab1() {
    const tab1:any = document.getElementById('tab1')
    const tab2:any = document.getElementById('tab2')

    tab1.style.color = "#5a557c"
    tab2.style.color = "black"

  }

  tab2() {
    const tab1:any = document.getElementById('tab1')
    const tab2:any = document.getElementById('tab2')

    tab1.style.color = "black"
    tab2.style.color = "#5a557c"

  }

}
