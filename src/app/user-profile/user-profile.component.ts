import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  name: string = "Doe";
  firstname: string = "John";
  age: number = 25;
  quote: string = "Avada Kedavra";
  photo: string = "https://randomuser.me/api/portraits/lego/2.jpg";
  clicked: boolean = false;

  constructor() { }

  onClicked() : void {
    this.clicked = !this.clicked
  }

  ngOnInit(): void {
  }

  
  // name: string;
  // firstname: string;
  // age: number;
  // quote: string;
  // photo: string;

  // constructor(@Inject(String)  nameValu: string, firstnameValue: string, ageValue: number, quoteValue: string ) {
  //   this.name = nameValu;
  //   this.firstname = firstnameValue;
  //   this.age = ageValue;
  //   this.quote = quoteValue;
  //   this.photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
  // }

}
