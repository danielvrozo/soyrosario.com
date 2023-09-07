import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  domain = 'https://rosarioalcaldesa.com/rosarioalcaldesa/api/';
  endpoint = 'materiales/materiales.php?id=1'
  constructor(
    private http:HttpClient
  ) { }

  GET(items:any): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint}`, {
      observe: 'response'
    });
  }

  UPDATE(data:any): Observable<any> {
    return this.http.post(this.domain + this.endpoint, JSON.stringify(data), {
      observe: 'response'
    });
  }
}
