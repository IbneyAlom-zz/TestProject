import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsAndSeedsComponent } from './nuts-and-seeds.component';

describe('NutsAndSeedsComponent', () => {
  let component: NutsAndSeedsComponent;
  let fixture: ComponentFixture<NutsAndSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsAndSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsAndSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
