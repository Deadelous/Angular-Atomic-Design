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
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
