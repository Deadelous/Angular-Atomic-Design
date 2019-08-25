import { Component, OnInit, Input } from '@angular/core';
import {FacadeService} from '../../../services/facade.service';

@Component({
  selector: 'atomic-m-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 // @Input() selectedAtomic: IAtomicItem;

  atomics: any[];

  constructor(private facadeService: FacadeService) { }

  searchName: '';

  ngOnInit() {

  }

}
