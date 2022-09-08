import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.css']
})
export class InputItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isExpand:boolean=false;
  expand():void{
    this.isExpand=!this.isExpand;
  }
}