import { Component } from '@angular/core';
import { faCoffee, faAngry } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atomic-Design';
  faCoffee = faCoffee;
  faAngry = faAngry;

  constructor() {

  }
}
