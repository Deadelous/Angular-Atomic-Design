import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'atomic-a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() backgroundColor: string;
  @Input() textColor: string;
  @Input() text: string;

  @Output() buttonClick = new EventEmitter();

  backgroundButton: string;
  textColorButton: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.backgroundButton = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'background-color-transparent';
    this.textColorButton = this.textColor ? 'color-' + this.textColor : 'black';
  }

  onClick() {
    this.buttonClick.emit();
  }
}
