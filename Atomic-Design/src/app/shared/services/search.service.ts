import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {atomics} from '../model/mock_atomic';
import {IAtomicItem} from '../model/atomicitem';

import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly baseUrl = 'http://localhost:3000';
  items: any[];

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetAtomicId(id): Observable<IAtomicItem> {
    return this.httpClient.get<IAtomicItem>(this.baseUrl + '/atomics/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getAtomicItemsFake() {
    this.items = atomics;
    return this.items;
  }

  getAtomicItems(): Observable<IAtomicItem> {
    return this.httpClient.get<IAtomicItem>(this.baseUrl + '/atomics/')
      .pipe(
       retry(1),
       catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
