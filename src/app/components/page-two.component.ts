import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-two-component',
  standalone: true,
  template: `
    <h2 class="my-class">Hello from {{ name }}!</h2>
  `,
  styles: `
    .my-class {
      color: blue;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PageTwoComponent {
  name = 'PageTwoComponent';
}
