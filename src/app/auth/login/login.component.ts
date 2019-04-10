import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {User} from '../user';
import {AuthUser} from '../auth-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Welcome!';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: User;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authService.isLogedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = new User;

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.user.username = this.f.username.value;
    this.user.password = this.f.password.value;
    this.authService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // alert error
          this.error = 'Username or password is not correct';
          this.loading = false;
        });
    //
    // fake logging in
    let auser = new AuthUser();
    auser.token = '2By8LOhBmaW5nZXJwcmludCIlMDAzMW';
    auser.username = this.user.username;
    localStorage.setItem('currentUser', JSON.stringify(auser));
    //
    this.router.navigate(['/home']);
  }
}
