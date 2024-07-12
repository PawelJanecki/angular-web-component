import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-one-component',
  standalone: true,
  template: `
    <h2 class="my-class">Hello from {{ name }}!</h2>
    <button (click)="log()">klik</button>
  `,
  styles: `
    .my-class {
      color: blue;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PageOneComponent {
  name = 'PageOneComponent';

  log() {
    console.log('klik klik!')
  }
}
