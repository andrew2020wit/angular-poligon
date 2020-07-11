import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCdkComponent } from './platform-cdk.component';

describe('PlatformCdkComponent', () => {
  let component: PlatformCdkComponent;
  let fixture: ComponentFixture<PlatformCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
