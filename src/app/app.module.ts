import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';

@NgModule({
  declarations: [ //components,directives,pipes
    AppComponent, HomeComponent, AngularBasicsComponent, 
    TechnologiesComponent, AngularPipesComponent  
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //components
})
export class AppModule { }
