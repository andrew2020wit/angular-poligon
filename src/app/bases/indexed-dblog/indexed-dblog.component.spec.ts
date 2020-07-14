import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedDBLogComponent } from './indexed-dblog.component';

describe('IndexedDBLogComponent', () => {
  let component: IndexedDBLogComponent;
  let fixture: ComponentFixture<IndexedDBLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexedDBLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedDBLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
