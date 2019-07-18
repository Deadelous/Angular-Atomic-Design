import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'atomic-o-gridcard',
  templateUrl: './gridcards.component.html',
  styleUrls: ['./gridcards.component.css']
})
export class GridcardsComponent implements OnInit, OnChanges {
  @Input() style: string;

  gridcard: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   this.gridcard = this.style ? 'style-' + this.style : 'direction';
  }

}
