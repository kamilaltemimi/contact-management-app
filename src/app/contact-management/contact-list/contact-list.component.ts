import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from 'src/app/core/models/contact';
import { ContactManagementService } from 'src/app/core/services/contact-management.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  contactDataColumns = ['first name', 'last name', 'age', 'phone number', 'email', 'actions']
  contactTable = new MatTableDataSource<Contact>()

  constructor(
    private contactManagementService: ContactManagementService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getContacts()
  }

  deleteContact(id: string): void {
    this.contactManagementService.deleteContact(id).subscribe(() => 
      this.getContacts())
  }
  
  getContacts(): void {
    this.contactManagementService.getContacts().subscribe(data => { 
      this.contactTable = new MatTableDataSource(data)
      this.contactTable.paginator = this.paginator
      this.contactTable.sort = this.sort
    })
  }

  openDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '480px',
      height: '480px',
      data: contact
    })
    dialogRef.afterClosed().subscribe(() => this.contactManagementService.getContacts().subscribe(() => this.getContacts()))
  }

  filterTable(value: Event): void {
    let searchTerm = (value.target as HTMLInputElement).value
    this.contactTable.filter = searchTerm
  }

}
