import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {IAtomicItem} from '../model/atomicitem';

import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly baseUrl = 'http://localhost:4200';

  private refreshNeed$ = new Subject<void>();

  get Refresh$() {
    return this.refreshNeed$;
  }

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetAtomicId(id: number): Observable<IAtomicItem> {
    return this.httpClient.get<IAtomicItem>(this.baseUrl + '/api/v1/atomics/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAtomicItems(): Observable<IAtomicItem> {
    return this.httpClient.get<IAtomicItem>(this.baseUrl + '/api/v1/atomics')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteAtomic(id: number) {
    return this.httpClient.delete(this.baseUrl + '/api/v1/atomics/' + id)
      .pipe(
        catchError(this.errorHandler),
        tap(() => {
          this.Refresh$.next();
        })
      );
  }

  createAtomic(atomic) {
    const body = JSON.stringify(atomic);
    return this.httpClient.post(this.baseUrl + '/api/v1/atomics', body, this.httpOptions)
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
