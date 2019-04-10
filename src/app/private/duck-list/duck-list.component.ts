import { Component, OnInit } from '@angular/core';
import {Duck, DuckSimple} from '../duck';
import {RequestService} from '../request.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-duck-list',
  templateUrl: './duck-list.component.html',
  styleUrls: ['./duck-list.component.css']
})
export class DuckListComponent implements OnInit {
  ducks: DuckSimple[];

  constructor(private service: RequestService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.service.getDucks().subscribe(ducks => {
      this.ducks = ducks;
    });
  }

}
