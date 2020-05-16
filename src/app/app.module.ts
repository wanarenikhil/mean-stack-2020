import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { AngularBasicsComponent } from './angular-basics/angular-basics.component'; 
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component'; 
import { TechnologiesComponent } from './technologies/technologies.component'; 
import { HomeComponent } from './home/home.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NestedComponent } from './nested/nested.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { ExpressComponent } from './express/express.component';
import { FgColorDirective } from './directives/fg-color.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { NgShowDirective } from './directives/ng-show.directive';
import { NgHideDirective } from './directives/ng-hide.directive';
import { NumberComponent } from './number/number.component';
import { MustMatchDirective } from './directives/must-match.directive'; 


@NgModule({ 
  declarations: [   // components, directives, pipes 
    AppComponent, AngularBasicsComponent, AngularPipesComponent, TechnologiesComponent, HomeComponent, GenderPipe, OrderByPipe, UsersComponent, PostsComponent, CommentsComponent, TodosComponent, AlbumsComponent, PhotosComponent, CaseStudyComponent, UsersListComponent, UsersTableComponent, LoginComponent, RegisterComponent, ViewChildComponent, NestedComponent, CountryComponent, StateComponent, CityComponent, ParentComponent, ChildComponent, CustomDirectivesComponent, ExpressComponent, FgColorDirective, BgColorDirective, NgShowDirective, NgHideDirective, NumberComponent, MustMatchDirective 
  ], 
  imports: [   // modules 
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    Ng2SearchPipeModule, 
    HttpClientModule 
  ], 
  providers: [],   // services 
  bootstrap: [AppComponent]   // components 
})
export class AppModule { } 
