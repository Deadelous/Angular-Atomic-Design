import {Injectable, Injector} from '@angular/core';
import {AtomicService} from './atomic.service';


@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  private atomicService: AtomicService;

  public get AtomicService(): AtomicService {
    if (!this.atomicService) {
      this.atomicService = this.injector.get(AtomicService);
    }
    return this.atomicService;
  }

  constructor(private injector: Injector) {
  }

  getRefresh() {
    return this.AtomicService.Refresh$;
  }

  getAtomicId(id: number) {
    return this.AtomicService.GetAtomicId(id);
  }

  deleteAtomic(id: number) {
    return this.AtomicService.deleteAtomic(id);
  }

  getAllAtomics() {
    return this.AtomicService.getAtomicItems();
  }

  createAtomics(atomic) {
    return this.AtomicService.createAtomic(atomic);
  }

}
