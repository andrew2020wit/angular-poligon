import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component implements OnInit {
  routerParam = 0;
  query1s = '';
  query2n = 0;

  goLink = {
    id: 7,
    query1s: 'rrr',
    query2n: 4,
  };

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe(
      (params) => (this.routerParam = params['id'])
    );

    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.query1s = queryParam['query1s'];
        this.query2n = queryParam['query2n'];
      }
    );
  }

  ngOnInit(): void {}

  goTo() {
    this.router.navigate(['/route2/id', this.goLink.id], {
      queryParams: {
        query1s: this.goLink.query1s,
        query2n: this.goLink.query2n,
      },
    });
  }
}
