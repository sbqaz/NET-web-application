import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HQBuild } from './hqBuild';
import { FLBuild } from './flBuild';

@Injectable()
export class AppService {
  private localUrl = 'api';

  constructor(private _http: Http) { }

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
}
