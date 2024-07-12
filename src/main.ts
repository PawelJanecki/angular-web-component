import { provideRouter } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { HomeComponent } from './app/components/home.component';
import { PageOneComponent } from './app/components/page-one.component';
import { PageTwoComponent } from './app/components/page-two.component';
import { AppComponent } from './app/app.component';

async function webComponentApp() {
  const app = await createApplication({
    providers: [
      provideRouter([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'page-one', component: PageOneComponent },
        { path: 'page-two', component: PageTwoComponent },
      ]),
    ],
  });
  const element = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('my-app-webcomponent', element);
}

(async function () {
  await webComponentApp();
})();