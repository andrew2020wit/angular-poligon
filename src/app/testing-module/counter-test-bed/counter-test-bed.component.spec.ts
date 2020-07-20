import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestBedComponent } from './counter-test-bed.component';
import { By } from '@angular/platform-browser';

describe('CounterTestBedComponent', () => {
  let component: CounterTestBedComponent;
  let fixture: ComponentFixture<CounterTestBedComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [CounterTestBedComponent] });
    fixture = TestBed.createComponent(CounterTestBedComponent);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component).toBeDefined();
  });
  it('should render country property', () => {
    const num = 56;
    component.counter = num;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#counterView'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toContain(num.toString());
  });
  it('should add green class if counter is even', () => {
    const num = 58;
    component.counter = num;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('#counterView'));
    let el: HTMLElement = de.nativeElement;
    expect(el.classList.contains('green')).toBe(true);
  });
  it('should increment counter after clicked', () => {
    let btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', null);
    expect(component.counter).toBe(1);
  });
});
