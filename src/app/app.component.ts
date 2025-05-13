import { Component } from '@angular/core';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  message: string = 'Hello from Angular!';

  InterpolationMethod() {
    return 'Hello from Interpolation!';
  }
}
