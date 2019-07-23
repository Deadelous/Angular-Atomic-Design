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
  @Input() fontstyle: string;

  constructor() { }

  textColor: string;
  textFontStyle: string;

  ngOnInit() {
  }

  ngOnChanges() {
    this.textColor = this.color ? 'color-' + this.color : 'black';
    this.textFontStyle = this.fontstyle ? 'font-' + this.fontstyle : 'normal';
  }

}


