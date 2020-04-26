import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService 
{ 

  private baseURL = "https://jsonplaceholder.typicode.com/albums"; 

  constructor(private http: HttpClient) 
  { 
    console.log("==== AlbumsService Created ====="); 
  }


  getAllAlbums(): Observable<any> 
  { 
     return this.http.get(this.baseURL); 
  } 

  getAlbumsById(albumId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "/" + albumId); 
  } 

  getAlbumsByUserId(userId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "?userId=" + userId); 
  } 
}
