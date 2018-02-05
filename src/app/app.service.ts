import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  private localUrl = 'api';

  constructor(private _http: Http, private messageService: MessageService) { }

  sayHello(): Observable<any> {
    const url = `${this.localUrl}/hello`;
    return this._http.get(this.localUrl).map((response: Response) => {
      return response.text();
    });
  }

  listHQBuildsAsObservable(): Observable<string[]> {
    const url = `${this.localUrl}/hqbuilds`;
    this.messageService.add('Service: Fetched HQ Builds from Shared Drive');
    return this._http.get(url).map((response: Response) => response.json());
  }

  listFLBuildsAsObservable(): Observable<string[]> {
    const url = `${this.localUrl}/flbuilds`;
    this.messageService.add('Service: Fetched FL Builds from Shared Drive');
    return this._http.get(url).map((response: Response) => response.json());
  }

  submitDeploymentForm(model: any): Observable<any> {
    const url = `${this.localUrl}/deployment`;
    this.messageService.add('Service: Adding deploymentform to test.txt file');
    return this._http.post(url, model).map((response: Response) => {
      return response;
    });
  }
}
