import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atomic-a-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
