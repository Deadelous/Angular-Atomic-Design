import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {FacadeService} from '../../../services/facade.service';

@Component({
  selector: 'atomic-o-gridcard',
  templateUrl: './gridcards.component.html',
  styleUrls: ['./gridcards.component.css']
})
export class GridcardsComponent implements OnInit, OnChanges {

  items: any = [];

  constructor(private facadeService: FacadeService) {
  }

  loadAtoms() {
    return this.facadeService.getAllAtomics().subscribe((data: {}) => {
      this.items = data;
    });
  }

  ngOnInit() {
    this.loadAtoms();
  }

  ngOnChanges() {
  }

}
