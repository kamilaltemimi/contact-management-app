import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactManagementService {

  URL = 'https://contact-management-fa19d-default-rtdb.firebaseio.com/contacts'

  constructor(
    private http: HttpClient
  ) { }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.URL + '.json', contact)
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<{[key:string]:Contact}>(this.URL + '.json').pipe(map(data => {
      const contacts: Contact[] = []
      for (const key in data) {
        let contact: Contact = {...data[key], id: key}
        contacts.push(contact)
      } return contacts
    }))
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(this.URL + `/${id}.json`)
  }

  getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(this.URL + `/${id}.json`)
  }

  editContact(id: string, newContact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.URL + `/${id}.json`, newContact)
  }
    
  
}
