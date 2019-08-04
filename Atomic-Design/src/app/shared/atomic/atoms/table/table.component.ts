import { Component, OnInit } from '@angular/core';
import { IAtomicItem } from 'app/shared/model/atomicitem';
import { FacadeService } from 'app/shared/services/facade.service';

@Component({
  selector: 'atomic-a-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  atomic: IAtomicItem;
  items: any = [];
  atomicName = '';
  atomicCategory = '';

  constructor(private facadeService: FacadeService) {

  }

  loadAtoms() {
    return this.facadeService.getAllAtomics().subscribe((data: {}) => {
      this.items = data;
    });
  }

  ngOnInit() {
    this.loadAtoms();
    // this.items = this.facadeService.getFakeAtomics();
  }

}
