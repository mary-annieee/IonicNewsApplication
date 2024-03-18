import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  myForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
  }
  register(){
    this.router.navigateByUrl('newspage');
  }

}
