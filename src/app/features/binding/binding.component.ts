import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  message: string = 'Hello from Angular!';

  InterpolationString() {
    return `Hello from Interpolation!`;
  }

  CheckStatus() {
    alert('Hello from CheckStatus!');
  }

    isButtonDisabled: boolean = true;

    CheckDisabled() {
      this.isButtonDisabled = !this.isButtonDisabled;
    }
}
