import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-app';

  // title1: string;
  title2: string = 'app';
  title3 = 'app';
  
  // items1: string[]
  items2: string[]  = ['item1', 'item2', 'item3'];
  items3 = ['item1', 'item2', 'item3'];

  //primative datatypes:
  primitiveDataTypes():void{
    var a1: number
    var a2: string
    var a3: boolean
    var app1: AppComponent = new  AppComponent();

    //ArrayFields
    var a4: number[]
    var a5: string[]
    var a6: boolean[]
    var a7: AppComponent[]
  }


  log(text: string): void{
      var message: string = 'Message '+ text;
      console.log(message);
  }

  private log2(text: string): void{
    var message: string = 'Message '+ text;
    console.log(message);
  }

  // sum(a:number, b:number):number{
    sum(a:number, b:number){
    return a+b;
  }
}
