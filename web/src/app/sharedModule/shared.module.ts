import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { NotfoundComponent } from './notfound/notfound.component';
import { ItemcountlistComponent } from './itemcountlist/itemcountlist.component';

const MAT_MODULES= [
  MatCardModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSortModule,
  MatToolbarModule,
  MatGridListModule,
];

const COMPONENTS=[
  HeaderComponent,
  FooterComponent,
  ItemComponent,
  ItemcountlistComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
    NotfoundComponent,

  ],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
exports:[
  COMPONENTS,
  MAT_MODULES
]
})
export class SharedModule { }
