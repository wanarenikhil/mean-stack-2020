import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = "Todos Table";
  todos: any;
  message = "";
  userId = 0;

  //pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private ts: TodosService, private route: ActivatedRoute, private pagerService: PagerService) {
    console.log("===== TodosComponent created ======");
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams.userId;
    if (this.userId)
      this.getTodosByUserId();
    else
      this.getAllTodos();
    console.log("===== TodosComponent initialized ======");
  }

  ngOnDestroy(): void {
    console.log("===== TodosComponent destroyed ======");
  }

  getTodosByUserId() {
    this.ts.getTodosByUserId(this.userId)
      .subscribe(response =>  { this.todos = response, this.setPage(1) },
        error => this.message = error);
  }

  getAllTodos() {
    this.ts.getAllTodos()
      .subscribe(response =>  { this.todos = response, this.setPage(1) },
        error => this.message = error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.todos.length, page);

    // get current page of items
    this.pagedItems = this.todos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
