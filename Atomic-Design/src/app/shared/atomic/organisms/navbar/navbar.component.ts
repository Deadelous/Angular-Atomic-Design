import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'atomic-o-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() color: string;

  navbarColor: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.navbarColor = this.color ? 'backgroundcolor-' + this.color : 'black';
   }

}
