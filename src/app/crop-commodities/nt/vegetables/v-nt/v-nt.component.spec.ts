import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VNtComponent } from './v-nt.component';

describe('VNtComponent', () => {
  let component: VNtComponent;
  let fixture: ComponentFixture<VNtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VNtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
