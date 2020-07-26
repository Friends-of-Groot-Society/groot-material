import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../models/login';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  title: string = "";
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {
    this.title = "LOGIN";

    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)

      ]]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get fromInput() { return this.loginForm.controls; }

  onLoginSubmit() { 
    this.submitted = true;
    // console.log(this.fromInput.email.value);
    // console.log(this.fromInput.password.value);

    // reset alerts on submit
    this.alertService.clear();
    this.loading = true;
    // this.authenticationService.login(this.fromInput.email.value, this.fromInput.password.value);

    this.authenticationService.getMemberAuth(this.fromInput.email.value, this.fromInput.password.value)
      .pipe(first())
      .subscribe(
        data => { 

          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
