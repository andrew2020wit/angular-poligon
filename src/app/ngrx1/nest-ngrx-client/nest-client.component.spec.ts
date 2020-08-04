import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestNgrxClientComponent } from './nest-client.component';

describe('NestClientComponent', () => {
  let component: NestNgrxClientComponent;
  let fixture: ComponentFixture<NestNgrxClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NestNgrxClientComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestNgrxClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
