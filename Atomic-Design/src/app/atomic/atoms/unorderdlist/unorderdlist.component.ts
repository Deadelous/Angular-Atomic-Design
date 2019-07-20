import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'atomic-a-ul',
  templateUrl: './unorderdlist.component.html',
  styleUrls: ['./unorderdlist.component.css']
})
export class UnorderdlistComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;

  listType: string;

  constructor() { }

  ngOnInit() {
  }

}
