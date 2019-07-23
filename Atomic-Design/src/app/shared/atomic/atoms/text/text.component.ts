import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'atomic-a-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  textColor: string;

  ngOnInit() {
  }

  ngOnChanges() {
    this.textColor = this.color ? 'color-' + this.color : 'black';
  }

}


