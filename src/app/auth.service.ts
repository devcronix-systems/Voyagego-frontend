
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  address: string;

  constructor(private httpClient: HttpClient) { }

  login(email: any, password: any) {
  //  return this.httpClient.post();
  }

}
