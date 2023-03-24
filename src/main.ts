import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([HttpClientModule])],
}).catch((err) => console.error(err));
