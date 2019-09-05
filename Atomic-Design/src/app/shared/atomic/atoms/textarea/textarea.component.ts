import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atomic-a-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
