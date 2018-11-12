import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCropComponent } from './food-crop.component';

describe('FoodCropComponent', () => {
  let component: FoodCropComponent;
  let fixture: ComponentFixture<FoodCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
