import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USEComponent } from './use.component';

describe('USEComponent', () => {
  let component: USEComponent;
  let fixture: ComponentFixture<USEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
