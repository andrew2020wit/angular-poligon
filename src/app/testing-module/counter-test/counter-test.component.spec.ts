import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestComponent } from './counter-test.component';
import {By} from '@angular/platform-browser';

describe('CounterTestComponent: in', () => {
  let component: CounterTestComponent;
  let fixture: ComponentFixture<CounterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render counter property', () => {
    const numTest = 56;
    component.counter = numTest;
    const debElem = fixture.debugElement.query(By.css('#counterView')).nativeElement;
    fixture.detectChanges();
    expect(debElem.textContent).toContain(numTest.toString());
  });

  it('should add green class if counter is even', () => {
    component.counter = 6;
    const debElem = fixture.debugElement.query(By.css('#counterView')).nativeElement;
    fixture.detectChanges();
    expect(debElem.classList.contains('green-color')).toBeTruthy();
  });

  it('increment by click', () => {
    const btnIncr = fixture.debugElement.query(By.css('#increment'));
    btnIncr.triggerEventHandler('click', null);
    expect(component.counter).toBe(1);
  });

});
