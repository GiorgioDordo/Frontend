import { Component } from '@angular/core';
import { TestserviceService } from '../../shared/service/testservice.service';

@Component({
  selector: 'app-test2',
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component {
  constructor(private dataSvc: TestserviceService) {
  }

  ChangeServiceString() {
    this.dataSvc.commonString = 'Hello from Test2 Component!';
  }
}
