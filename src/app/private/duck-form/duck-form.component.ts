import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {Duck, DuckUpdate} from '../duck';
import {FeatureSet} from '../featureSet';

@Component({
  selector: 'app-duck-form',
  templateUrl: './duck-form.component.html',
  styleUrls: ['./duck-form.component.css']
})
export class DuckFormComponent implements OnInit {
  @Output() duckFormSubmit = new EventEmitter();
  duck: DuckUpdate;
  loading = false;
  submitted = false;
  duckForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.duckForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      accessibility: [false],
      gender: ['-'],
      colour: [''],
      beakColour: [''],
      length: [0],
      weigh: [0],
      swimmingSkill: [1]
    });
    this.duck = new DuckUpdate();
    this.duck.featureSet = new FeatureSet();
  }

  // convenience getter for easy access to form fields
  get f() { return this.duckForm.controls; }

  duckFormSubmitted() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.duckForm.invalid) {
      this.loading = false;
      return;
    }
    this.duck.name = this.f.name.value;
    this.duck.description = this.f.description.value;
    this.duck.accessibility = this.f.accessibility.value.toString();
    this.duck.featureSet.gender = this.f.gender.value;
    this.duck.featureSet.colour = this.f.colour.value;
    this.duck.featureSet.beakColour = this.f.beakColour.value;
    this.duck.featureSet.length = this.f.length.value;
    this.duck.featureSet.weigh = this.f.weigh.value;
    this.duck.featureSet.swimmingSkill = this.f.swimmingSkill.value;
    this.duckFormSubmit.emit(this.duck);
  }
}
