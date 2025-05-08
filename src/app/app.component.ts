import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, LogoutComponent],
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
