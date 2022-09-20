import { Component, OnInit, Input } from '@angular/core';
import { task } from '../task';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() inputDefaultItem: task = new task();
  constructor(private service: TaskService) { }

  ngOnInit(): void {

  }
  upDate(element: any) {
    console.log(element)
  }
  isEdit: boolean = true;
  isFavorite: boolean = false;
  editText() {
    this.isEdit = !this.isEdit;
  }
  isExpand: boolean = true;
  expand(): void {
    this.isExpand = !this.isExpand;
  }
  favorite(): void {
    this.isFavorite = !this.isFavorite;
  }
  cancel():void{
    this.service.removeTask(this.inputDefaultItem).subscribe(res=>{
      this.service.anotherSubject.next(this.inputDefaultItem.id);
    });
    //呼叫service remove掉特定Item，subscribe它的回應，成功後再利用subject傳遞給app component移除掉畫面上的this.inputDefaultItem.id的item
  }
}
