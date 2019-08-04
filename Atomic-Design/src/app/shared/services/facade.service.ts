import { Injectable, Injector } from '@angular/core';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private searchService: SearchService;

  public get SearchService(): SearchService {
    if (!this.searchService) {
      this. searchService = this.injector.get(SearchService);
    }
    return this.searchService;
  }

  constructor(private injector: Injector) { }

  getAtomicId(id: number) {
    return this.SearchService.GetAtomicId(id);
  }


  getFakeAtomics() {
    return this.SearchService.getAtomicItemsFake();
  }

  getAllAtomics() {
    return this.SearchService.getAtomicItems();
  }

}
