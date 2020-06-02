import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroSelectComponent } from './micro-select.component';

describe('MicroSelectComponent', () => {
  let component: MicroSelectComponent;
  let fixture: ComponentFixture<MicroSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
