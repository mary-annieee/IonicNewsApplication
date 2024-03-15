import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string="";
  age: number=0;
  dob: string="";
  place: string="";
  location: string="";

  constructor() { }

  ngOnInit() {
  }
  register(){
    
  }

}
