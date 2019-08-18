import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'atomic-a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() size: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() formName: string;
  @Input() text: string;

  @Input() group: FormGroup

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }
}
