import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PrincipalComponent } from './principal/principal.component';
import { SportComponent } from './sport/sport.component';
import { SportsComponent } from './sports/sports.component';
import { AsociationComponent } from './asociation/asociation.component';
import { AsociationsComponent } from './asociations/asociations.component';
import { TargetComponent } from './target/target.component';

const routes: Routes = [

  {path:'asociations', component:AsociationsComponent},
  {path:'principal', component:PrincipalComponent},
  {path:'sport', component:SportComponent},
  {path:'sports', component:SportsComponent},
  {path:'asociation', component:AsociationComponent},
  {path: 'target', component:TargetComponent},
  {path: '**', redirectTo:'/principal'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
