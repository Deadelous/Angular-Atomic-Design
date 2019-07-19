import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atomic-m-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() style: string;

  card: string;
  cardimage: string;
  container: string;
  cardStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
