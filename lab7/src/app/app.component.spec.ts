import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  describe('Check Form and getters', ()=>
  {

    it('should create New Form ', () => {
      const NewForm = component.NewForm
      console.log(NewForm)
      const NewFormValues = {
        Firstanme: null,
        Lastname:null,
        Phone:null,
        Login: null,
        email: null,
        password: null,
        Repeatpassword: null
      }
      expect(NewForm.value).toEqual(NewFormValues)
    });



    it('check getters First Name', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Firstanme')).toEqual(component.FirstName_)
    });

    it('check get Last name ', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Lastname')).toEqual(component.LastName)
    });


    it('check get Phone', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Phone')).toEqual(component.Phone)
    });


    it('check get Login ', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Login')).toEqual(component.Login)
    });
    it('check get email ', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('email')).toEqual(component.email)
    });
    it('check get password ', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('password')).toEqual(component.password)
    });
    it('check get repeat ', () => {
      const NewForm = component.NewForm
      expect(NewForm.get('Repeatpassword')).toEqual(component.repeat)
    });
  });


  it('Check Disable button', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
  });


  describe('Check Input', () =>{

    it('Check Firstname', () => {

      let firstname = component.NewForm.controls['Firstanme']
      firstname.setValue('')
      expect(component.FirsNameErrors()).toBe('The field must be filled')
      firstname.setValue('Igor')
      expect(component.FirsNameErrors()).toBe('')
    });


    it('Check Lastname', () => {
      let Lastname = component.NewForm.controls['Lastname']
      Lastname.setValue('')
      expect(component.LastNameErrors()).toBe('The field must be filled')
      Lastname.setValue('Igorevich')
      expect(component.LastNameErrors()).toBe('')
    });
    it('Check Phone', () => {
      let phone = component.NewForm.controls['Phone']
      phone.setValue('')
      expect(component.PhoneErrors_()).toBe('The field must be filled')
      phone.setValue('Igorevich')
      expect(component.PhoneErrors_()).toBe('Enter the correct phone, you fool')
      phone.setValue('Igorevich')
      expect(component.PhoneErrors_()).toBe('Enter the correct phone, you fool')
      phone.setValue('+38099')
      expect(component.PhoneErrors_()).toBe('Enter the correct phone, you fool')
    });

      it('Check Login', () => {
        let Login = component.NewForm.controls['Login']
        Login.setValue('')
        expect(component.LoginErrors()).toBe('The field must be filled')
        Login.setValue(' ')
        expect(component.LoginErrors()).toBe('Enter the correct date')
        Login.setValue('IG')
        expect(component.LoginErrors()).toBe('Enter the correct date')
        Login.setValue('Igor!!!!228')
        expect(component.LoginErrors()).toBe('Enter the correct date')

      });
      it('Check Email', () => {
        let email = component.NewForm.controls['email']
        email.setValue('Igor')
        expect(component.EmailErrors()).toBe('Incorrect email')

        email.setValue(' ')
        expect(component.EmailErrors()).toBe('Incorrect email')

        email.setValue('')
        expect(component.EmailErrors()).toBe('The field must be filled')

        email.setValue('Igor@')
        expect(component.EmailErrors()).toBe('Incorrect email')

        email.setValue('Igor@super.star')
        expect(component.EmailErrors()).toBe('')
      });

      it('Check Password', () => {
        let Password = component.NewForm.controls['password']
        Password.setValue('')
        expect(component.PasswordErrors()).toBe('The field must be filled')

        Password.setValue(' ')
        expect(component.PasswordErrors()).toBe('Enter the correct date')

        Password.setValue('Igor')
        expect(component.PasswordErrors()).toBe('Enter the correct date')
      });
        it('Check RepeatPassword', () => {

          let RepeatPassword = component.NewForm.controls['Repeatpassword']

          RepeatPassword.setValue('')
          expect(component.RepeatErrors()).toBe('The field must be filled')

          RepeatPassword.setValue(' ')
          expect(component.RepeatErrors()).toBe('Enter the correct date')

          RepeatPassword.setValue('Igor')
          expect(component.RepeatErrors()).toBe('Enter the correct date')

        });

  //
  //
  });

});
