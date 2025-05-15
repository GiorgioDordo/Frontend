import { Component } from '@angular/core';
import { TestserviceService } from '../../shared/service/testservice.service';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  constructor(public dataSvc: TestserviceService) {

  }
}
