import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Output() pushToFather = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  choose:number=0;
  changeType(type:number) {
    this.choose=type;
    this.pushToFather.emit(type);
  }
}
