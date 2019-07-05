import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'atomic-a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() size: string;
  @Input() color: string;
  @Input() placeholder: string;

  constructor() { }

  value: string = "";
  inputColor: string;

  ngOnInit() {
  }

  ngOnChanges() {
    this.inputColor = this.color ? 'required' + this.color : 'invalid';

  }
}
