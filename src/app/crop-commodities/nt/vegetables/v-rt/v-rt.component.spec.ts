import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VRtComponent } from './v-rt.component';

describe('VRtComponent', () => {
  let component: VRtComponent;
  let fixture: ComponentFixture<VRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
