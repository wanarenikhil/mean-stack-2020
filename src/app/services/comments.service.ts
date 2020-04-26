import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService 
{ 

  private baseURL = "https://jsonplaceholder.typicode.com/comments"; 

  constructor(private http: HttpClient) 
  { 
    console.log("==== CommentsService Created ====="); 
  }


  getAllComments(): Observable<any> 
  { 
     return this.http.get(this.baseURL); 
  } 

  getCommentsById(commentId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "/" + commentId); 
  } 

  getCommentsByPostId(postId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "?postId=" + postId); 
  } 
} 
