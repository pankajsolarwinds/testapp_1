import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item?:IItem;
  @Output() ItemActionEvent = new EventEmitter();
  // @Output() restoreItemEvent = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }
  public doDelete(selectedItem:any):void{
    debugger
    this.ItemActionEvent.emit({...selectedItem,...{isDeleted:false}});
  }
  public doRestore(selectedItem:any):void{
    this.ItemActionEvent.emit({...selectedItem,...{isDeleted:true}});
  }

}
