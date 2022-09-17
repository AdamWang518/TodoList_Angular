import { UUID } from 'angular2-uuid';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {
  Data = new task();
  constructor(private service: TaskService) { }

  ngOnInit(): void {
  }
  isExpand: boolean = false;
  expand(): void {
    this.isExpand = !this.isExpand;
  }
  save(): void {
    this.Data.id=UUID.UUID();
    this.service.save(this.Data).subscribe(res => {
      this.service.addTask(this.Data);
      this.Data = new task();
    });

  }

}
