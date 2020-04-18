import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit {
title='Angular 9 Basics';//string
colors=['RED','MAGENTA','BLUE','PURPLE'];//array

day=1;//number
min:number=1;//number
max=8;//number

show=true; //boolean
hide:boolean=false;//boolean

 employee={
    id:101,
    name:'Pradeep chinchole',
    salary:2345788.4353444,
    variable:0.12,
    doj:new Date(),
    pan:'amxpc9867G',
    mobile:'9787654262'
  };//object


showHide(){
  this.hide=!this.hide;
}

 
 constructor() { 

console.log("========AngularBasicsComponent created ==============");


  }

  ngOnInit(): void {

    console.log("========AngularBasicsComponent initialized ==============");

  }


   ngOnDestroy(): void {

    console.log("========AngularBasicsComponent destroyed ==============");

  }
}
