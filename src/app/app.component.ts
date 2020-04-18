import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //where to inject
  templateUrl: './app.component.html',//where to display
  //template: '<h1>Inline Angular Template</h1>',//where to display
  
  styleUrls: ['./app.component.css'] //how to display
})
export class AppComponent {
  title = 'angular9-example'; //what to display
}
