import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
// Interpolation String
  message: string = 'Hello from Angular!';

  InterpolationString() {
    return `Hello from Interpolation!`;
  }

  // Event Binding
  CheckStatus() {
    alert('Hello from CheckStatus!');
  }

  // Property Binding
    isButtonDisabled: boolean = true;

    CheckDisabled() {
      this.isButtonDisabled = !this.isButtonDisabled;
    }

    // Two Way Binding
    twoWay: string = 'Hello from Two Way Binding!';  
}
