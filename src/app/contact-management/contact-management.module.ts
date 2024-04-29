import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagementRoutingModule } from './contact-management-routing.module';
import { ContactManagementComponent } from './contact-management.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ContactManagementService } from '../core/services/contact-management.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ContactManagementComponent,
    AddContactComponent,
    ContactListComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    ContactManagementRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule
  ],
  providers: [
    ContactManagementService
  ]
})
export class ContactManagementModule { }
