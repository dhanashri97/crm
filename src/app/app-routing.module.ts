import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { from } from 'rxjs';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

const routes: Routes = [
{ path:'customeradd', component: CustomerAddComponent},
{ path:'customerlist', component: CustomerListComponent},
{  path:'customer/update/:customerId', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
