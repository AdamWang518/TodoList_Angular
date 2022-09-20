import { task } from './task';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowInput = true;
  // 四種 data-binding方式
  // {{}} 變數binding => 後端->前端
  // [] 屬性binding => 後端->前端
  // () 事件binding => 前端->後端
  // [(ngModel)] 雙向綁定 => 前端<->後端
  response: task[] = [];

  constructor(private http: HttpClient, private service: TaskService) {
    // this.http.get<any>('http://localhost:63320/getTodoList?type=0').subscribe(res => {
    //   this.response = res.data;
    //   console.log(this.response)
    // });
    let that = this;
    service.selectTask().subscribe(res => {
      console.log(res.data);
      res.data.forEach(function (value: any) {
        that.response.push(value);
      });
    })
    service.anotherSubject.asObservable().subscribe(res => {
      this.response = this.response.filter(x => x.id !== res);
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getTask().subscribe(res => {
      this.response.push(res);
      console.log(this.response);
    });
  }
  getChild(type:number){
    this.response= [];
    let that = this;
    this.service.selectTask(type).subscribe(res => {
      res.data.forEach(function (value: any) {
        that.response.push(value);
      });
    })
  }
  remove() {

    // this.elements = this.elements.filter(function (x) {
    //   return x.id != element.id;
    // })
    //elements=elements.filter(element)
  }
}


