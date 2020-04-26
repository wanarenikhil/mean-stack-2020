import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId = 0; 
  title = "Users Component"; 
  message = ""; 
  user: any; 

  constructor(private us: UsersService, private route: ActivatedRoute) 
  { 
    console.log("===== UsersComponent created ======"); 
  } 


  ngOnInit(): void 
  { 
    this.userId = this.route.snapshot.params.user_id; 
    
    if(this.userId) 
      this.getUserById(); 
    
      console.log("===== UsersComponent initialized ======"); 
  } 

  ngOnDestroy(): void 
  { 
    console.log("===== UsersComponent destroyed ======"); 
  } 

   getUserById() 
   {
     this.us.getUserById(this.userId) 
        .subscribe(response => this.user=response, 
                    error => this.message = error);  
   } 

}
