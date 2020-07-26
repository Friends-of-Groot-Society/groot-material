import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../models/register';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '../../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = "";
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }


  ngOnInit() {
    this.title = "REGISTER";

    this.registerForm = this.formBuilder.group({
     
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30) 
      ]],
       'fName': [this.user.fName, [
        Validators.required
      ]],
      'lName': [this.user.lName, [
        Validators.required
      ]]
    });
  } 
  
  get f() { return this.registerForm.controls; }

  onRegisterSubmit() {
    this.submitted = true;
    this.alertService.clear();

    console.log("submitted: "+this.user.fName + ' ' + this.user.lName + ' ' + this.user.email  );
    this.loading = true;
    console.log("registerForm.value "+ this.registerForm.value);
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
