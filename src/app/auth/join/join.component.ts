import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {User} from '../user';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  title = 'Join Rubber Ducks\' fan club!';
  error = '';
  registerForm: FormGroup;
  user: User;
  loading = false;
  submitted = false;
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = new User;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.user.username = this.f.username.value;
    this.user.password = this.f.password.value;
    if (this.authService.addUser(this.user)) {
      this.router.navigate(['/join-detailed']);
    } else {
      this.loading = false;
      this.error = 'Registration failed';
    }
    // report about error
  }

}
