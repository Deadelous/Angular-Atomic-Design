import { Component, OnInit } from '@angular/core';
import { IAtomicItem } from 'app/shared/model/atomicitem';
import { FacadeService } from 'app/shared/services/facade.service';
import {Router} from '@angular/router';

@Component({
  selector: 'atomic-a-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  atomic: IAtomicItem;
  items: any = [];
  atomicName = '';
  atomicDescription = '';

  constructor(private facadeService: FacadeService, private router: Router) {

  }

  loadAtoms() {
    return this.facadeService.getAllAtomics().subscribe((data: {}) => {
      this.items = data;
    });
  }

  ngOnInit() {
    this.loadAtoms();
    this.facadeService.getRefresh().subscribe(() => {
      this.loadAtoms();
    });
    this.loadAtoms();
  }

  private delete(item: IAtomicItem) {
    this.facadeService.deleteAtomic(item.id).subscribe(data => {
      console.log(data);
      this.items = this.items.filter(i => i.id !== item);
      }, error => console.log('There was an error: ', error));
    this.router.navigate(['/', 'atoms']);
  }


}
