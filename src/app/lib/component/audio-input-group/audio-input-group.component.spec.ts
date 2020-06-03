import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioInputGroupComponent } from './audio-input-group.component';

describe('AudioInputGroupComponent', () => {
  let component: AudioInputGroupComponent;
  let fixture: ComponentFixture<AudioInputGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioInputGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
