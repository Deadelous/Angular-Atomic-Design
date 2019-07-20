import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'atomic-o-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() color: string;


  footerColor: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   this.footerColor = this.color ? 'backgroundcolor-' + this.color : 'black';
  }


}
