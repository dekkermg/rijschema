import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RideDetailComponent } from './rides/ridedetail.component';
import { RidesComponent } from './rides/rides.component';
import { RidesService } from './services/rides.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'ridedetail', component: RideDetailComponent },     
      { path: 'rides', component: RidesComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    RideDetailComponent,
    RidesComponent
  ],
  providers: [RidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
