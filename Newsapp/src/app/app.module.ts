import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiserviceService } from './apiservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
