import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemcountlist',
  templateUrl: './itemcountlist.component.html',
  styleUrls: ['./itemcountlist.component.scss']
})
export class ItemcountlistComponent implements OnInit {
  @Input() itemsList?:any;
  constructor() { }

  ngOnInit(): void {
  }

}
