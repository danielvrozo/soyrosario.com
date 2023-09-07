import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  domain = 'https://rosarioalcaldesa.com/rosarioalcaldesa/api/';
  endpoint = 'login/login.php'
  constructor(
    private http:HttpClient
  ) { }

  LOGIN(data:any): Observable<any> {
    return this.http.post(this.domain + this.endpoint, JSON.stringify(data), {
      observe: 'response'
    });
  }
}

