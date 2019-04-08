import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;
  returnUrl;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    // private alertService: AlertService
  ) {}

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      building: ['', Validators.required],
      place: [''],
      isClubOnly: [''],
      maxPeople: [''],
      name: ['', Validators.compose([ Validators.required, Validators.maxLength(50)])],
      descr: ['', Validators.compose([ Validators.required, Validators.minLength(30)])]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/events';
  }

  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }
    this.loading = true;
    this.router.navigate([this.returnUrl]);
  }

}
