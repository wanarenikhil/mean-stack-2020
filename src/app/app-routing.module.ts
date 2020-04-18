import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'basics',component:AngularBasicsComponent},
  {path:'pipes',component:AngularPipesComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'**',component:HomeComponent},
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
