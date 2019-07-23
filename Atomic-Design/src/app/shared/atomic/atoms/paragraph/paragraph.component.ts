import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'atomic-a-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() color: string;
  @Input() size: string;

  paragraphColor: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.paragraphColor = this.color ? 'color-' + this.color : 'black';
  }

}
