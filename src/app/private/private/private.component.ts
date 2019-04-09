import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

}
