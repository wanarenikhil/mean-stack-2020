import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',//where to inejct
  templateUrl: './technologies.component.html',//where to display
  styleUrls: ['./technologies.component.css'] //how to display
})
export class TechnologiesComponent implements OnInit {

 title='Top 5 technologies';  //what to display

technologies=[
{id:101,name:'Angular',likes:0,dislikes:0},
{id:102,name:'React',likes:0,dislikes:0},
{id:103,name:'AWS Basics',likes:0,dislikes:0},
{id:104,name:'Spring',likes:0,dislikes:0},
{id:105,name:'Micro Service',likes:0,dislikes:0},
]; //array


incrementLikes(t){
  t.likes++;
}

incrementDislikes(t){
  t.dislikes++;
}




  constructor() { 

console.log("========TechnologiesComponent created ==============");


  }

  ngOnInit(): void {

    console.log("========TechnologiesComponent initialized ==============");

  }


   ngOnDestroy(): void {

    console.log("========TechnologiesComponent destroyed ==============");

  }

}
