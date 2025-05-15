import { Component } from '@angular/core';
import { TestserviceService } from '../../shared/service/testservice.service';
import { Credentials } from '../../shared/models/credentials';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  constructor(public dataSvc: TestserviceService) {
  }

  cred: Credentials= new Credentials();

  RunLogin() {
    this.dataSvc.CheckLoginStatus('admin', 'admin').subscribe({
      next: (data) => {
        if (data == 200) {
          alert('Login Successful');
        }
      },
    })
  }
}
