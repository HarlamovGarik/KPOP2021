import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  NewForm: FormGroup | any

  ngOnInit() {
    this.NewForm = new FormGroup({
      'Firstanme': new FormControl(null, [Validators.required]),
      'Lastname': new FormControl(null, [Validators.required]),
      'Phone': new FormControl(null, [Validators.required,
        Validators.pattern(/[-+()0-9]{7,}/)]),
      'Login': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{5,15}$')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{5,15}$')]),
      'Repeatpassword': new FormControl(null, [Validators.required,
        Validators.pattern('^[\\w\\d]{5,15}$')])
    })
  }

  FirsNameErrors() {
    return this.FirstName_.errors?.['required'] ? 'The field must be filled' :''
  }
  LastNameErrors() {
    return this.LastName.errors?.['required'] ? 'The field must be filled' :''
  }
  PhoneErrors_() {
    return this.Phone.errors?.['required'] ? 'The field must be filled' :
      this.Phone.errors?.['pattern'] ? 'Enter the correct phone, you fool' :''
  }

  LoginErrors() {
    return this.Login.errors?.['required'] ? 'The field must be filled' :
      this.Login.errors?.['pattern'] ? 'Enter the correct date' :''
  }

  EmailErrors() {
    return this.email.errors?.['required'] ? 'The field must be filled' :
      this.email.errors?.['email'] ? 'Incorrect email' : ''
  }

  PasswordErrors() {
    return this.password.errors?.['required'] ? 'The field must be filled' :
      this.password.errors?.['pattern'] ? 'Enter the correct date' : ''
  }

  RepeatErrors() {
    return this.repeat.errors?.['required'] ? 'The field must be filled' :
      this.repeat.errors?.['pattern'] ? 'Enter the correct date' : ''
  }

  Test(){

  }



  get FirstName_() {
    return this.NewForm.get('Firstanme');
  }
  get LastName() {
    return this.NewForm.get('Lastname');
  }
  get Phone() {
    return this.NewForm.get('Phone');
  }

  get Login() {
    return this.NewForm.get('Login');
  }

  get email() {
    return this.NewForm.get('email');
  }

  get password() {
    return this.NewForm.get('password');
  }

  get repeat() {
    return this.NewForm.get('Repeatpassword');
  }
}
