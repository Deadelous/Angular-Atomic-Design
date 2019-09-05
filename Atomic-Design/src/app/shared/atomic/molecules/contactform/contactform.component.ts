import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'atomic-m-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
      this.contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        phonenumber: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)
      });
  }

}
