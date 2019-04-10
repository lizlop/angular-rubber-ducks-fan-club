import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UpdateUser, User} from '../user';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  id: number;
  empattern = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}';
  telpattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  user: UpdateUser;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id']; });
    this.userForm = this.formBuilder.group({
      email: ['', Validators.pattern(this.empattern)],
      gender: [''],
      firstName: [''],
      lastName: [''],
      birthday: [''],
      phone: ['', Validators.pattern(this.telpattern)],
      country: [''],
      city: [''],
      street: [''],
      building: [''],
      letter: ['-']
    });
  }
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      this.loading = false;
      return;
    }
    this.user.email = this.f.email.value;
    this.user.firstName = this.f.firstName.value;
    this.user.lastName = this.f.lastName.value;
    this.user.gender = this.f.gender.value;
    let date = this.f.birthday.value.toString().split('-', 3);
    this.user.birthDate = date[2] + '-' + date[1] + '-' + date[0] + '-00-00';
    this.user.phoneNumber = this.f.phone.value.toString();
    this.user.country = this.f.country.value;
    this.user.city = this.f.city.value;
    this.user.street = this.f.street.value;
    this.user.building = this.f.building.value;
    this.user.buildingLetter = this.f.letter.value === '' ? '-' : this.f.letter.value;
    this.loading = false;
    this.service.updateUser(JSON.stringify(this.user), this.id)
      .subscribe(response => console.log(response), error => console.log(error));
    this.router.navigate(['/home/my-account']);
  }
}
