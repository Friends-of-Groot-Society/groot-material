import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../models/LoginModel';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms'; 
import { first } from 'rxjs/operators';
import { AlertService } from '../../../services';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { AdminAuthenticationService } from 'src/app/services/auth/admin-authentication.service'; 
import { AuthStore } from 'src/app/services/auth/auth-store.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  adminData = new User() ;
  title: string = "";
  user: LoginModel = new LoginModel();
  hide = true;
  loading = false;
  submitted = false;
  returnUrl!: string;
  email: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authStore: AuthStore,
    private adminService: AdminAuthenticationService,
    private alertService: AlertService
  ) {
    ///////////////////////////////// uncomment after fixing AUTH
    // redirenUct to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    this.loginForm = formBuilder.group({
      email: [this.user.email, 
        [Validators.required, Validators.email]],
      password: [this.user.password, 
        [Validators.required,Validators.minLength(4),Validators.maxLength(30)]]
    });
  }


  ngOnInit() {
    this.title = "LOGIN"; 

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  // get fromInput() { return this.form.controls; }
  onAdminSubmit() { 
    const val = this.loginForm.value;
    this.submitted = true; 
    this.loading = true;
    this.adminService.login(val.email, val.password)
      .subscribe(
        () => {
          localStorage.setItem('email', val.email); 
          this.router.navigateByUrl(`/admin/users/${val.email}`); 
          },
          err => {
            alert("login failed");
          }
      )
  }

  onLoginSubmit() {  
    const val = this.loginForm.value;
    this.submitted = true; 

    // reset alerts on submit
    this.alertService.clear();
    this.loading = true;
    this.authStore.login(val.email, val.password)
      .subscribe(
        () => { 
          localStorage.setItem('email', val.email); 
          this.router.navigateByUrl(`/users/${val.email}`)  
          },
          err => {
            alert("login failed");
          }
      )

    // this.authenticationService.login(this.fromInput.email.value, this.fromInput.password.value);

    // this.authenticationService.getMemberAuth(val.email, val.password) 
    //   .subscribe(
    //     () => { 

    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
  }

}
