import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactManagementService {

  URL = 'https://contact-management-fa19d-default-rtdb.firebaseio.com/contacts.json'

  constructor(
    private http: HttpClient
  ) { }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.URL, contact)
  }
}
