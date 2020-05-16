import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

// Added 
import { HomeComponent } from './home/home.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component'; 
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component'; 
import { TechnologiesComponent } from './technologies/technologies.component'; 
import { CaseStudyComponent } from './case-study/case-study.component'; 
import { PostsComponent } from './posts/posts.component'; 
import { CommentsComponent } from './comments/comments.component'; 
import { TodosComponent } from './todos/todos.component'; 
import { AlbumsComponent } from './albums/albums.component'; 
import { PhotosComponent } from './photos/photos.component'; 
import { UsersComponent } from './users/users.component'; 
import { UsersListComponent } from './users-list/users-list.component'; 
import { UsersTableComponent } from './users-table/users-table.component'; 
import { NestedComponent } from './nested/nested.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExpressComponent } from './express/express.component';
// End 


//const routes: Routes = []; 


// Added 
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'basics',component:AngularBasicsComponent},
  {path:'pipes',component:AngularPipesComponent},
  {path:'technologies',component:TechnologiesComponent}, 
  {path:'casestudy',component:CaseStudyComponent, 
    children: 
    [ 
      {path:'users',component:UsersComponent, 
        children: 
        [ 
          {path:'list',component:UsersListComponent}, 
          {path:'table',component:UsersTableComponent}, 
        ] 
      }, 
      {path:'users/:user_id',component:UsersComponent}, 
      {path:'posts',component:PostsComponent}, 
      {path:'comments',component:CommentsComponent}, 
      {path:'todos',component:TodosComponent}, 
      {path:'albums',component:AlbumsComponent}, 
      {path:'photos',component:PhotosComponent},        
    ] 
  }, 
  {path:'nested',component:NestedComponent}, 
  {path:'custom-directives',component:CustomDirectivesComponent}, 
  {path:'view-child',component:ViewChildComponent}, 
  {path:'login',component:LoginComponent}, 
  {path:'register',component:RegisterComponent}, 
  {path:'express',component:ExpressComponent}, 

  {path:'**',component:HomeComponent},
];
// End 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
