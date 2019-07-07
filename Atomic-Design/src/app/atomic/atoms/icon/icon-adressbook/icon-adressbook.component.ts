import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atomic-a-icon-adressbook',
  templateUrl: './icon-adressbook.component.html',
  styleUrls: ['./icon-adressbook.component.css']
})
export class IconAdressbookComponent implements OnInit {
  faAdressbook = faAddressBook;

  constructor() { }

  ngOnInit() {
  }

}
