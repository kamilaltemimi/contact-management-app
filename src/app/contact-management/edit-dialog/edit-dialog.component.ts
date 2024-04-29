import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/core/models/contact';
import { ContactManagementService } from 'src/app/core/services/contact-management.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  ageRange!: number[]
  contactData!: FormGroup

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: Contact,
    private fb: FormBuilder,
    private contactManagementService: ContactManagementService) {
  }
  ngOnInit(): void {
    this.setAgeRange()
    this.contactData = this.fb.group({
      firstName: [this.data.firstName, [Validators.required, Validators.maxLength(20)]],
      lastName: [this.data.lastName, [Validators.required, Validators.maxLength(20)]],
      age: [this.data.age, Validators.required],
      phoneNumber: [this.data.phoneNumber, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: [this.data.email, [Validators.required, Validators.email]]
    })
  }

  setAgeRange(): void {
    let ageRange = []
    for(let i = 1; i < 100; i++) {
      ageRange.push(i)
    } this.ageRange = ageRange
  }

  submitForm(): void {
    this.contactManagementService.editContact(this.data.id, this.contactData.value).subscribe()
  }
}
