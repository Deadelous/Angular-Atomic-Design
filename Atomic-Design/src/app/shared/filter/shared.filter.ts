import {Pipe, PipeTransform} from '@angular/core';
import { IAtomicItem } from '../model/atomicitem';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(atomics: IAtomicItem[], searchName?: string, searchCategory?: string
  ): IAtomicItem[] {

    if (!atomics) {
      return [];
    }

    if (atomics && atomics.length) {
      return atomics.filter(atomic => {
        if (searchName && atomic.name.toLowerCase().indexOf(searchName.toLowerCase()) === -1){
            return false;
        }
        if (searchCategory && atomic.category.toLowerCase().indexOf(searchCategory.toLowerCase()) === -1){
            return false;
        }
        return true;
      });
     } else {
    return atomics;
     }
  }
}
