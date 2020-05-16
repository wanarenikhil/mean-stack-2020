import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit 
{ 

  title = "Users List"; 
  users: any; 
  message = ""; 

  //pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private us: UsersService, private pagerService: PagerService) 
  { 
    console.log("===== UsersListComponent created ======"); 
  } 


  ngOnInit(): void 
  { 
    this.getAllUsers(); 
    console.log("===== UsersListComponent initialized ======"); 
  } 

  ngOnDestroy(): void 
  { 
    console.log("===== UsersListComponent destroyed ======"); 
  } 

   getAllUsers() 
   {
     this.us.getAllUsers()
        .subscribe(response => { this.users = response, this.setPage(1) },
                    error => this.message = error);  
   } 

   setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
