import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';

@Component({
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent implements OnInit {
  items: any[];
  clear: any;
  constructor(private searchService: SearchService) {

  }

  atomicName = '';
  atomicCategory = '';

  ngOnInit() {
   this.items = this.searchService.getAtomics();
   this.clear = this.searchService.clear();
  }
}
