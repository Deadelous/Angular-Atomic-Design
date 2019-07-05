import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'atomic-a-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
 @Input() type: string;
 @Input() text: string;
 @Input() color: string;
 @Input() size: string;

 headerColor: string;
 headerType: string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.headerType = this.type ? 'type-' + this.type : 'h1';
    this.headerColor = this.color ? 'color-' + this.color : 'black';
  }
}
