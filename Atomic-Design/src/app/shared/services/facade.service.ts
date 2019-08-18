import {Injectable, Injector} from '@angular/core';
import {SearchService} from './search.service';
import {IAtomicItem} from "../model/atomicitem";

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private searchService: SearchService;

  public get SearchService(): SearchService {
    if (!this.searchService) {
      this.searchService = this.injector.get(SearchService);
    }
    return this.searchService;
  }

  constructor(private injector: Injector) {
  }

  getRefresh() {
    return this.searchService.Refresh$;
  }

  getAtomicId(id: number) {
    return this.SearchService.GetAtomicId(id);
  }

  deleteAtomic(id: number) {
    return this.SearchService.deleteAtomic(id);
  }

  getAllAtomics() {
    return this.SearchService.getAtomicItems();
  }

  createAtomics(atomic) {
    return this.SearchService.createAtomic(atomic);
  }

}
