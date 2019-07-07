import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atomic-a-icon-information',
  templateUrl: './icon-information.component.html',
  styleUrls: ['./icon-information.component.css']
})
export class IconInformationComponent implements OnInit {
  faInformation = faInfo;

  constructor() { }

  ngOnInit() {
  }

}
