import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpJsonplaceholderComponent } from './http-jsonplaceholder.component';

describe('HttpJsonplaceholderComponent', () => {
  let component: HttpJsonplaceholderComponent;
  let fixture: ComponentFixture<HttpJsonplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpJsonplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
