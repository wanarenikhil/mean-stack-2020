import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = "Posts Table"; 
  posts: any; 
  message = ""; 
  userId = 0; 
  
  constructor(private ps: PostsService, private route: ActivatedRoute) 
  { 
    console.log("===== PostsComponent created ======"); 
  } 

  ngOnInit(): void 
  { 
    this.userId = this.route.snapshot.queryParams.userId; 
    
    if(this.userId )
      this.getPostsByUserId(); 
    else 
      this.getAllPosts(); 
    
    console.log("===== PostsComponent initialized ======" + this.userId); 
  } 

  ngOnDestroy(): void 
  { 
    console.log("===== PostsComponent destroyed ======"); 
  } 

   getAllPosts() 
   { 
     this.ps.getAllPosts() 
        .subscribe(response => this.posts = response, 
                    error => this.message = error); 
   } 

   getPostsByUserId() 
   { 
     this.ps.getPostsByUserId(this.userId) 
        .subscribe(response => this.posts = response, 
                    error => this.message = error); 
   } 

}
