import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atomic-m-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() style: string;
  @Input() text: string;
  @Input() paragraph: string;
  @Input() color: string;

  cardColor;

  constructor() { }

  ngOnInit() {
    this.cardColor = this.color ? 'backgroundcolor-' + this.color : 'black';
  }

}
