import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { CustomersComponent } from './features/customers/customers.component';
import { ProductsComponent } from './features/products/products.component';
import { LogoutComponent } from './core/logout/logout.component';
import { BindingComponent } from './features/binding/binding.component';
import { Test1Component } from './core/test1/test1.component';
import { Test2Component } from './core/test2/test2.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'test1', component: Test1Component},
  {path: 'test2', component: Test2Component}
];
