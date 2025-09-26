import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular";

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

Sentry.init({
  dsn: "https://25eb801249cc0145370949066bd9c92e@o4510077623599104.ingest.de.sentry.io/4510082977366096",
  sendDefaultPii: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
