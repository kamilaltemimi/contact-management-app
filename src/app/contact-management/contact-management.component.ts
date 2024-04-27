import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.scss']
})
export class ContactManagementComponent {

  currentTab = 0

  chooseTab(tab: number){
    this.currentTab = tab
  }

  onSubmittedForm(value: number): void{
    this.currentTab = value
  }


}
