import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../../events/event';
import {Place} from '../../events/place';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;
  event: Event;
  returnUrl;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: RequestService
  ) {}

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      cost: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      building: ['', Validators.required],
      letter: [''],
      place: [''],
      isClubOnly: [false],
      maxPeople: [0, Validators.required],
      name: ['', Validators.compose([ Validators.required, Validators.maxLength(50)])],
    });
    this.event = new Event();
    this.event.place = new Place();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/events';
  }

  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      this.loading = false;
      return;
    }
    let d = this.f.date.value.toString().split('-', 3);
    let t = this.f.time.value.toString().split(':', 2);
    this.event.date = d[2] + '-' + d[1] + '-' + d[0] + '-' + t[0] + '-' + t[1];
    this.event.place.country = this.f.country.value;
    this.event.place.city = this.f.city.value;
    this.event.place.street = this.f.street.value;
    this.event.place.building = this.f.building.value;
    this.event.place.buildingLetter = this.f.letter.value === '' ? '-' : this.f.letter.value;
    this.event.place.name = this.f.place.value;
    this.event.isClubOnly = this.f.isClubOnly.value.toString();
    this.event.maxPeople = this.f.maxPeople.value <= 0 ? 0 : this.f.maxPeople.value;
    this.event.name = this.f.name.value;
    this.event.cost = this.f.cost.value <= 0 ? 0 : this.f.cost.value;
    this.loading = false;
    this.service.addEvent(JSON.stringify(this.event)).subscribe(response => response, error => error);
    this.router.navigate(['/home/my-events']);
  }

}
