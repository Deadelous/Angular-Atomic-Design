import { Injectable } from '@angular/core';

import { atomics } from '../model/mock_atomic';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  items: any[];
  constructor() { }

   getAtomics() {
    this.items = atomics;
    return this.items;
  }

  clear() {
    this.items = [];
  }
}
