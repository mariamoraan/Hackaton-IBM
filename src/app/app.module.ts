import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SportComponent } from './sport/sport.component';
import { AsociationComponent } from './asociation/asociation.component';
import { TargetComponent } from './target/target.component';
import { AsociationsComponent } from './asociations/asociations.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SportComponent,
    AsociationComponent,
    TargetComponent,
    AsociationsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
