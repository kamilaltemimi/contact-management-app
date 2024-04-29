import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactManagementService } from 'src/app/core/services/contact-management.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  @Output() onSubmitForm = new EventEmitter<number>()

  addContactForm!: FormGroup;
  ageRange!: number[]

  constructor (
    private fb: FormBuilder,
    private contactManagementService: ContactManagementService 
  ) {}

  ngOnInit(): void {
    this.setAgeRange()
    this.addContactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', Validators.required],
      age: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submitForm(): void {
    this.contactManagementService.addContact(this.addContactForm.value).subscribe(() => this.onSubmitForm.emit(1))
  }

  setAgeRange(): void {
    let ageRange = []
    for (let i = 1; i < 100; i++) {
      ageRange.push(i)
    } this.ageRange = ageRange
  }

}
