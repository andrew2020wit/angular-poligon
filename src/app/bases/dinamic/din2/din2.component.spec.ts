import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Din2Component } from './din2.component';

describe('Din2Component', () => {
  let component: Din2Component;
  let fixture: ComponentFixture<Din2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Din2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Din2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
