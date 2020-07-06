import { FormsComponent } from './forms.component';
import {FormBuilder} from '@angular/forms';

describe('FormsComponent: unit-test', () => {
  let component: FormsComponent;


  beforeEach( () => {
    component = new FormsComponent(new FormBuilder());
  });

  it('simple test form: exist forms element', () => {
    expect(component.profileForm.contains('personName')).toBeTruthy();
  });

  it('test of validation email: incorrect', () => {
    const control = component.profileForm.get('contacts').get('email');
    control.setValue('incorrect');
    expect(control.valid).toBeFalse();
  });

  it('test of validation email: correct', () => {
    const control = component.profileForm.get('contacts').get('email');
    control.setValue('inco@rrect');
    expect(control.valid).toBeTruthy();
  });

});
