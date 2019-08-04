import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IAtomicItem} from '../../shared/model/atomicitem';
import {FacadeService} from '../../shared/services/facade.service';

@Component({
  selector: 'app-atomicdetail',
  templateUrl: './atomicdetail.component.html',
  styleUrls: ['./atomicdetail.component.css']
})
export class AtomicdetailComponent implements OnInit {

   atomic: IAtomicItem;

  constructor(private facadeService: FacadeService, private router: ActivatedRoute) { }

  GetAtomic(id: any) {
    this.facadeService.getAtomicId(id)
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
