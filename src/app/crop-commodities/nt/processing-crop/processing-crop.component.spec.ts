import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingCropComponent } from './processing-crop.component';

describe('ProcessingCropComponent', () => {
  let component: ProcessingCropComponent;
  let fixture: ComponentFixture<ProcessingCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
