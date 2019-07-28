import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import {IAtomicItem} from '../../shared/model/atomicitem';

@Component({
  selector: 'app-atomicdetail',
  templateUrl: './atomicdetail.component.html',
  styleUrls: ['./atomicdetail.component.css']
})
export class AtomicdetailComponent implements OnInit {

   atomic: IAtomicItem;

  constructor(private searchService: SearchService, private router: ActivatedRoute) { }

  GetAtomic(id: any) {
    this.searchService.GetAtomicId(id)
      .subscribe((atomicItem: IAtomicItem) => {
          this.atomic = atomicItem;
        },
        (err: any) => console.log(err));
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id !== '0') {
      this.GetAtomic(id);
    }
  }
}
