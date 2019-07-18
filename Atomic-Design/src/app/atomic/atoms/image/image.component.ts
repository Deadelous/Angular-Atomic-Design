import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'atomic-a-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() style: string;
  @Input() url: string;
  @Input() type: string;
  @Input() size: string;

  urlStyle: string;
  imageType: string;
  imageSize: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlStyle = `url(${this.url})`;
    this.imageType = this.type ? 'type-' + this.type : 'type-square';
  }
}
