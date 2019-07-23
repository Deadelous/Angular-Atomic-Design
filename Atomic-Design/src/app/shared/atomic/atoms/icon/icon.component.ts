import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faInfo, faAddressBook, faBookmark, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atomic-a-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, OnChanges {
  @Input() style: string;
  @Input() icon: string;
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() textSize: string;

  iconStyle: string;
  iconBackground: string;
  iconSize: string;
  iconColor: string;

  iconName: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    switch (this.icon) {
      case 'information':
        this.iconName = faInfo;
        break;
      case 'adress':
        this.iconName = faAddressBook;
        break;
        case 'bookmark':
       this.iconName = faBookmark;
       break;
       case 'comment':
         this.iconName = faComment;
         break;
      default:
        this.iconName = null;
    }

    this.iconSize = this.textSize ? 'text-' + this.textSize : 'size-md';
    this.iconStyle = this.style ? 'icon-' + this.style : 'style';
    this.iconBackground = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'transparant';
    this.iconColor = this.color ? 'color-' + this.color : 'blue';

  }

}
