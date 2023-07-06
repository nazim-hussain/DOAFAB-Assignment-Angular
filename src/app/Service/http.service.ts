import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  get(url: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    let options = { headers: headers };
    return this.http.get(url, options).pipe(map(res => res));
  }
}
