import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { IAtomicItem } from 'app/shared/model/atomicitem';

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

  constructor(private searchService: SearchService) {

  }

  // loadAtoms() {
  //   return this.searchService.getAtomicItems().subscribe((data: {}) => {
  //     this.items = data;
  //   });
  // }

  ngOnInit() {
   // this.loadAtoms();
    this.items = this.searchService.getAtomicItemsFake();
  }

}
