import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-component',
  standalone: true,
  template: `
    <h2 class="my-class">Hello from {{ name }}!</h2>
  `,
  styles: `
    .my-class {
      color: green;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent {
  name = 'HomeComponent';
}
