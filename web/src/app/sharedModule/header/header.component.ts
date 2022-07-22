import { Component, OnInit } from '@angular/core';
import { IMasterData } from '../models';
import { SharedService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public masterData?:IMasterData;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getMasterData();
  }
  private getMasterData(){
    this.sharedService.getMasterData().subscribe((res)=>{
      this.masterData=res.data;
    })
  }

}
