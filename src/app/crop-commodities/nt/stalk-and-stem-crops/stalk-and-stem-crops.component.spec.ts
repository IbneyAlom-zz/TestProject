import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkAndStemCropsComponent } from './stalk-and-stem-crops.component';

describe('StalkAndStemCropsComponent', () => {
  let component: StalkAndStemCropsComponent;
  let fixture: ComponentFixture<StalkAndStemCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalkAndStemCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkAndStemCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
