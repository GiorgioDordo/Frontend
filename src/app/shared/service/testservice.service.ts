import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  commonString: string = 'Hello from Test Service!';
  constructor() { }
}
