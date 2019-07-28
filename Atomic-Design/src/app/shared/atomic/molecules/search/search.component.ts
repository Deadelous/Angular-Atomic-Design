import { Component, OnInit, Input } from '@angular/core';
import { atomics } from '../../../model/mock_atomic';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'atomic-m-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 // @Input() selectedAtomic: IAtomicItem;

  atomics: any[];

  constructor(private searchService: SearchService) { }

  searchName: '';

  ngOnInit() {

  }

}
