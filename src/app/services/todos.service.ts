import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

import { Observable } from 'rxjs'; 

@Injectable({ 
  providedIn: 'root' 
}) 
export class TodosService 
{
  private baseURL = "https://jsonplaceholder.typicode.com/todos"; 

  constructor(private http: HttpClient) 
  { 
    console.log("==== TodosService Created ====="); 
  }


  getAllTodos(): Observable<any> 
  { 
     return this.http.get(this.baseURL); 
  } 

  getTodosById(todoId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "/" + todoId); 
  } 

  getTodosByUserId(userId: number): Observable<any> 
  { 
     return this.http.get(this.baseURL + "?userId=" + userId); 
  } 

}