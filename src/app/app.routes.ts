import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { CustomersComponent } from './features/customers/customers.component';
import { ProductsComponent } from './features/products/products.component';
import { LogoutComponent } from './core/logout/logout.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'logout', component: LogoutComponent},
];
