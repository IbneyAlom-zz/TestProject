import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VUfComponent } from './v-uf.component';

describe('VUfComponent', () => {
  let component: VUfComponent;
  let fixture: ComponentFixture<VUfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VUfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
