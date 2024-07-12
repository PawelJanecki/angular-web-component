import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-component',
  standalone: true,
  template: `
    <h1 class="my-class">Hello from {{ name }}!</h1>
    <ul>
      <li><a [routerLink]="['/']" routerLinkActive="active">Home</a></li>
      <li><a [routerLink]="['/page-one']" routerLinkActive="active">Page One</a></li>
      <li><a [routerLink]="['/page-two']" routerLinkActive="active">Page Two</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: `
    .my-class {
      color: red;
    }
    .active {
      font-weight: bold;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppComponent implements OnInit {
  name = 'AppComponent';

  private router = inject(Router);

  ngOnInit() {
    this.router.initialNavigation();
  }
}
