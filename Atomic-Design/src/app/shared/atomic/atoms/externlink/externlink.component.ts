import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atomic-a-exlink',
  templateUrl: './externlink.component.html',
  styleUrls: ['./externlink.component.css']
})
export class ExternlinkComponent implements OnInit {
  @Input() link: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
