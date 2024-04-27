import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagementComponent } from './contact-management.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {path:'', component: ContactManagementComponent},
  {path:'add', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManagementRoutingModule { }
