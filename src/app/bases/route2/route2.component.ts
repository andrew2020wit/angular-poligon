import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  routerParam = 0;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(
      params => this.routerParam = params['id']);
  }

  ngOnInit(): void {

  }

}
