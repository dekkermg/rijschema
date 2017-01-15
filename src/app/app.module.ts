import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './model/welcome.component';
import { RitDetailComponent } from './model/ritdetail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'ritdetail', component: RitDetailComponent },     
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }      
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    RitDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
