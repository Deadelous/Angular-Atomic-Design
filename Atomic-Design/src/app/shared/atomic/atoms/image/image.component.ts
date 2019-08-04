import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'atomic-a-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() style: string;
  @Input() src: string;
  @Input() type: string;
  @Input() width: string;
  @Input() height: string;
  @Input() class: string;

  urlStyle: string;
  imageType: string;


  constructor() { }

  public onError() {
    this.src = '../../../../../assets/images/placeholder-logo.png';
  }

  ngOnChanges() {
    this.urlStyle = `url(${this.src})`;
    this.imageType = this.type ? 'type-' + this.type : 'type-square';
  }

  ngOnInit() {
  }
}
