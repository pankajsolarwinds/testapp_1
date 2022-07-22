import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IItem } from "./../sharedModule/models"
import { ApiService } from './services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public itemList: IItem[] = [];
  public ItemList$: Subject<IItem[]> = new Subject();
  public itemCountsDeleted: any;
  public itemCountsActive:any;
  public grandTotal: number = 0;
  public deletedItemSubTotal: number = 0;
  public activeItemSubTotal: number = 0;

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
    this.getItemList();
  }

  private getItemList():void{
    this.apiService.getAllItems().subscribe((res) => {
      if (res.status === 200) {
        const upatedData = res.data.map((item: IItem) => {
          return { ...item, isActive: true }
        })
        this.itemList = upatedData;
        this.ItemList$.next(upatedData);
        this.calaculateTotalAmount();
         this.findItemsCount();
      }
    });
  }
/**
 *  Active/Deleted item count list
 */
  private findItemsCount(): void {
   // Active List
    this.itemCountsActive = this.itemList.filter((r)=>r.isActive)
    .reduce((cnt: any, cur: any) =>  (cnt[cur.type] = cnt[cur.type] + 1 || 1, cnt), {});
   // Deleted List
    this.itemCountsDeleted = this.itemList.filter((r)=>!r.isActive)
    .reduce((cnt: any, cur: any) => (cnt[cur.type] = cnt[cur.type] + 1 || 1, cnt), {});
  }
  /**
   * call when out event trigger from item component
   * @param _item
   */
  public applyActionOnItem(_item: IItem):void {
    this.itemList.map((item: any) => {
      if (item.id === _item.id) {
        item.isActive = _item.isDeleted;
      }
      return item;
    });
    this.ItemList$.next(this.itemList);
    this.calaculateTotalAmount();
    this.findItemsCount();
  }

  /**
   * Calculate subTotal and GrandTotal seperately for Active/Deleted List
   */
  calaculateTotalAmount() :void{
    const cart = this.itemList.reduce((acc, item) => {
      if (item.isActive) {
        acc.activeItemSubTotal = parseFloat((acc.activeItemSubTotal + item.price).toFixed(2));
      } else {
        acc.deletedItemSubTotal = parseFloat((acc.deletedItemSubTotal + item.price).toFixed(2));
      }
      acc.grandTotal = parseFloat((acc.grandTotal + item.price).toFixed(2));
      return acc;
    }, {
      activeItemSubTotal: 0,
      deletedItemSubTotal: 0,
      grandTotal: 0
    });
    this.activeItemSubTotal = cart.activeItemSubTotal;
    this.deletedItemSubTotal = cart.deletedItemSubTotal;
    this.grandTotal = cart.grandTotal;
  }
}
