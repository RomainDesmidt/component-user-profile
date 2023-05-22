import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  name: string;
  firstname: string;
  age: number;
  quote: string;
  photo: string;

  constructor(nameValu: string, firstnameValue: string, ageValue: number, quoteValue: string ) {
    this.name = nameValu;
    this.firstname = firstnameValue;
    this.age = ageValue;
    this.quote = quoteValue;
    this.photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
  }

}
