import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, MessageService } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HQBuild } from './hqBuild';
import { FLBuild } from './flBuild';

@Injectable()
export class AppService {
  private localUrl = 'api';

  constructor(private _http: Http, private messageService MessageService) { }

  sayHello(): Observable<any> {
    const url = `${this.localUrl}/hello`;
    return this._http.get(this.localUrl).map((response: Response) => {
      return response.text();
    });
  }

  listHQBuildsAsObservable(): Observable<HQBuild[]> {
    const url = `${this.localUrl}/hqbuilds`;
    return this._http.get(url).map((response: Response) => response.json());
  }

  listFLBuildsAsObservable(): Observable<FLBuild[]> {
    const url = `${this.localUrl}/flbuilds`;
    return this._http.get(url).map((response: Response) => response.json());
  }

  submetDeploymentForm(model: any): Observable<any> {
    const url = 'localhost';
    const formData: FormData = new FormData();
    formData.append('id', model.id);
    return this._http.post(url, formData).map((response: Response) => {
      return response;
    });
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
