import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SportComponent } from './sport/sport.component';
import { AsociationComponent } from './asociation/asociation.component';
import { TargetComponent } from './target/target.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SportComponent,
    AsociationComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
