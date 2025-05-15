import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  commonString: string = 'Hello from Test Service!';
  isLogged: boolean = false;

  constructor(private http: HttpClient) { }
  // Method to fetch data from an API

  CheckLoginStatus(username: string, password: string) {

    return this.http.post( 'https://localhost:7023/login', username)

    this.isLogged = true;
  }
}
