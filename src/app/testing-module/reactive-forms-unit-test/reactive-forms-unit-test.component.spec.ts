import { ReactiveFormsUnitTestComponent } from './reactive-forms-unit-test.component';
import { FormBuilder } from '@angular/forms';

describe('ReactiveFormsUnitTestComponent', () => {
  let component: ReactiveFormsUnitTestComponent;
  beforeEach(() => {
    component = new ReactiveFormsUnitTestComponent(new FormBuilder());
  });

  it('Should create control "login"', () => {
    expect(component.form.contains('login')).toBe(true);
  });
  it('Should create control email', () => {
    expect(component.form.contains('email')).toBe(true);
  });
  it('expect(controle.valid).toBe(false)', () => {
    const controle = component.form.get('login');
    controle.setValue('');
    expect(controle.valid).toBe(false);
  });
});
