import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  commonString: string = 'Hello from Test Service!';
  isLogged: boolean = false;

  constructor(private http: HttpClient) { }
  // Method to fetch data from an API

  CheckLoginStatus(cred: Credentials) {

    return this.http.post( 'https://localhost:7023/api/login', cred)

    this.isLogged = true;
  }
}
