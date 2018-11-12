import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UFComponent } from './uf.component';

describe('UFComponent', () => {
  let component: UFComponent;
  let fixture: ComponentFixture<UFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
