import { task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  subject = new Subject<task>();
  anotherSubject = new Subject<String>();
  // subject(最原始，你有丟才會收到) behaviorSubject(會有預設值，在一開始訂閱就可以收到) replySubject (重複repeat多次)
  constructor(private http: HttpClient) { }
  save(data: task) {
    return this.http.post<any>('http://localhost:63320/setTodoListID', data)
  }
  removeTask(data: task){
    console.log(data);
    return this.http.get<any>(`http://localhost:63320/deleteTodoList?id=${data.id}`);
  }
  upDateTask(data: task){
    
  }
  addTask(data: task) {
    this.subject.next(data);
  }
  getTask() {
    return this.subject.asObservable();
  }
  selectTask(type:number=0){
    return this.http.get<any>(`http://localhost:63320/getTodoList?type=${type}`);
  }
}
