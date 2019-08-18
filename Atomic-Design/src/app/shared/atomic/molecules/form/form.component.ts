import { Component, OnInit } from '@angular/core';
import {FacadeService} from '../../../services/facade.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'atomic-m-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  atomicForm: FormGroup;
  validMessage = "";
  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.atomicForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  submitAtomic() {
    if (this.atomicForm.valid) {
      this.validMessage = 'Atomic is successful registered';
      this.facadeService.createAtomics(this.atomicForm.value).subscribe(
        data => {
          this.atomicForm.reset();
          return data;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
       this.validMessage = 'Please fill in the form';
      }
    }
}
