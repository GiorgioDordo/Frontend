import { Component } from '@angular/core';
import { TestserviceService } from '../../shared/service/testservice.service';
import { Credentials } from '../../shared/models/credentials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test1',
  imports: [CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  constructor(public dataSvc: TestserviceService) {
  }

  cred: Credentials = new Credentials();
  prods: any = [];

  RunLogin() {
    this.cred.userName = 'admin';
    this.cred.password = 'admin';
    this.dataSvc.CheckLoginStatus(this.cred).subscribe({
      next: (data) => {
        console.log(data)
      },
    })
  }

  ReadProducts() {
    this.dataSvc.GetProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.prods = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
