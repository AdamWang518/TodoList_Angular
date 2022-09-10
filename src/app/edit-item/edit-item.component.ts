import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  upDate(){

  }
  isEdit:boolean=true;
  editText(){
    this.isEdit=!this.isEdit;
  }
  isExpand:boolean=true;
  expand():void{
    this.isExpand=!this.isExpand;
    console.log("expand")
  }
}
