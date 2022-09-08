import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='';
  name:string="ABC";
  h2:string="";
  elements:any[]=[]
  allowInput=true;
  // 四種 data-binding方式
  // {{}} 變數binding => 後端->前端
  // [] 屬性binding => 後端->前端
  // () 事件binding => 前端->後端
  // [(ngModel)] 雙向綁定 => 前端<->後端
  setAllow(){
    this.allowInput=!this.allowInput;
  }
  addTask(){
    let data={
      str:this.h2,
      id:UUID.UUID()
    }
    this.elements.push(data)
  }
  remove(element:any){
    this.elements=this.elements.filter(function(x) {
      return x.id!=element.id;})
    //elements=elements.filter(element)
  }
}


