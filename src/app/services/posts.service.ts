import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService 
{ 

  private baseURL = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(private http: HttpClient) 
  { 
    console.log("==== PostsService Created ====="); 
  }


  getAllPosts(): Observable<any> 
  { 
     return this.http.get(this.baseURL); 
  } 

  getPostsById(postId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "/" + postId); 
  } 

  getPostsByUserId(userId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "?userId=" + userId); 
  } 
}
