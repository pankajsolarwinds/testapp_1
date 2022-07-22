import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcountlistComponent } from './itemcountlist.component';

describe('ItemcountlistComponent', () => {
  let component: ItemcountlistComponent;
  let fixture: ComponentFixture<ItemcountlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcountlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemcountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
