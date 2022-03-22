import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(rout: string): Observable<any>
  {
    return this.httpClient.get(this.getApiUrl(rout), this.getOptions())
  }

  public post(rout: string, body: object): Observable<any>
  {
    return this.httpClient.post(
      this.getApiUrl(rout),
      body,
      this.getOptions()
    )
  }

  public put(rout: string, body: object): Observable<any>
  {
    return this.httpClient.put(
      this.getApiUrl(rout),
      body,
      this.getOptions()
    )
  }

  public delete(rout: string, id: number): Observable<any>
  {
    return this.httpClient.delete(
      this.getApiUrl(rout) + "/" + id,
      this.getOptions()
    )
  }

  private getApiUrl(route: string): string {
    return 'http://localhost/' + route;
  }

  getOptions(): Object {
    const headerOptions = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return {
      headers: new HttpHeaders(headerOptions),
      withCredentials: false,
    };
  }

}
