import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { WelcomeComponent } from './model/welcome.component';
import { RitDetailComponent } from './model/ritdetail.component';
=======
import { WelcomeComponent } from './home/welcome.component';
import { RittenComponent } from './ritten/ritten.component';
>>>>>>> origin/master

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
<<<<<<< HEAD
      { path: 'ritdetail', component: RitDetailComponent },     
=======
      { path: 'ritten', component: RittenComponent },
>>>>>>> origin/master
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
<<<<<<< HEAD
    RitDetailComponent
=======
    RittenComponent
>>>>>>> origin/master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
