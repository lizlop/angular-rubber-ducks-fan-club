import { Component, OnInit } from '@angular/core';
import {Duck} from '../duck';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-duck-list',
  templateUrl: './duck-list.component.html',
  styleUrls: ['./duck-list.component.css']
})
export class DuckListComponent implements OnInit {
  ducks: Duck[];

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.service.getDucks().subscribe(ducks => this.ducks = ducks);
  }

}
