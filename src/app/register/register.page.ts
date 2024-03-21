import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { CameraResultType, CameraSource } from '@capacitor/camera';
const { Camera } = Plugins;

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
  nameError: string = '';
  ageError: string = '';
  dobError: string = '';
  placeError: string = '';
  locationError: string="";

  selectedImage: string ="";

  async openImagePicker() {
    const image = await Camera['getPhoto']({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    
    // Handle the selected image here, e.g., display it in your UI
    alert(image.webPath);
    this.selectedImage = image.webPath;

  }


  validateName(event: any) {
    const regex = /^[a-zA-Z\s]*$/;
    if (!this.name) {
      this.nameError = 'Name cannot be empty';
    } else if (!regex.test(this.name)) {
      this.nameError = 'Name should only contain letters and spaces';
    } else {
      this.nameError = '';
    }
  }

  validateAge(event: any) {
    if (!this.age) {
      this.ageError = 'Age cannot be empty';
    } else if ((this.age)<18) {
      this.ageError = 'Invalid Age';
    } else {
      this.ageError = '';
    }
  }

  validateDOB(event: any) {
    if (!this.dob) {
      this.dobError = 'DOB cannot be empty';
    } else {
      this.dobError = '';
    }
  }

  validatePlace(event: any) {
    if (!this.place) {
      this.placeError = 'Place cannot be empty';
    } else {
      this.placeError = '';
    }
  }

  validateLocation(event: any) {
    if (!this.location) {
      this.locationError = 'Location cannot be empty';
    } else {
      this.locationError = '';
    }
  }


  myForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
  }
  register(){
    this.validatePlace(event)
    this.validateAge(event)
    this.validateDOB(event)
    this.validateName(event)
    this.validateLocation(event)
    // this.router.navigateByUrl('newspage');

    if (
      this.nameError ||
      this.ageError ||
      this.dobError ||
      this.placeError ||
      this.locationError
    ) {
      // If any error exists, prevent navigation
      return;
    }

    this.router.navigateByUrl('newspage');


  }

}
