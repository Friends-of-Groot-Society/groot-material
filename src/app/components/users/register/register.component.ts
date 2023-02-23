import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../models/RegisterModel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder,  FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import {UserService} from '../user.service';
import { AlertService } from '../../../services';
import { AdminAuthenticationService } from 'src/app/services/auth/admin-authentication.service';
import { AuthStore } from 'src/app/services/auth/auth-store.service';
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
  email: void;
  firstName: void;
  lastName: void;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authStore: AuthStore,
    private adminAuthenticationService: AdminAuthenticationService,
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
     
      email: [this.user.email, [  Validators.required, Validators.email ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30) 
      ]],
      firstName: [this.user.firstName, [
        Validators.required
      ]],
      lastName: [this.user.lastName, [
        Validators.required
      ]]
    });
  } 
  
  get f() { return this.registerForm.controls; }
  onAdminRegister() {
    this.submitted = true;
    this.alertService.clear();

    console.log("submitted: "+this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.email  );
    this.loading = true;
    console.log("registerForm.value "+ this.registerForm.value);
    this.adminAuthenticationService.register(this.registerForm.value)
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
  onRegisterSubmit() {
    this.submitted = true;
    this.alertService.clear();

    console.log("submitted: "+this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.email  );
    this.loading = true;
    console.log("registerForm.value "+ this.registerForm.value);
    this.authStore.register(this.registerForm.value)
      .pipe(first(),
      tap((user) => {
        this.authStore.setUser(user);
      })) 
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/user/'+this.user.email]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
