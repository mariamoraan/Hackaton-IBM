import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SportComponent } from './sport/sport.component';
import { AsociationComponent } from './asociation/asociation.component';
import { TargetComponent } from './target/target.component';
import { AsociationsComponent } from './asociations/asociations.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SportComponent,
    AsociationComponent,
    TargetComponent,
    AsociationsComponent,
    SportsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
