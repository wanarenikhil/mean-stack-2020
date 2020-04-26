import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { CaseStudyComponent } from './case-study/case-study.component';

@NgModule({
  declarations: [ //components,directives,pipes
    AppComponent, HomeComponent, AngularBasicsComponent, 
    TechnologiesComponent, AngularPipesComponent, OrderByPipe, GenderPipe, UsersComponent, PostsComponent, CommentsComponent, TodosComponent, AlbumsComponent, PhotosComponent, UsersListComponent, UsersTableComponent, CaseStudyComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //components
})
export class AppModule { }
