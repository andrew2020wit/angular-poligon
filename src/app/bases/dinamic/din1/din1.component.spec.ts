import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Din1Component } from './din1.component';

describe('Din1Component', () => {
  let component: Din1Component;
  let fixture: ComponentFixture<Din1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Din1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Din1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
