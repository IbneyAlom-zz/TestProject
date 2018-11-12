import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VBtComponent } from './v-bt.component';

describe('VBtComponent', () => {
  let component: VBtComponent;
  let fixture: ComponentFixture<VBtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VBtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
