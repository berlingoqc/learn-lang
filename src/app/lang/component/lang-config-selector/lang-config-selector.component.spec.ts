import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangConfigSelectorComponent } from './lang-config-selector.component';

describe('LangConfigSelectorComponent', () => {
  let component: LangConfigSelectorComponent;
  let fixture: ComponentFixture<LangConfigSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangConfigSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangConfigSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
