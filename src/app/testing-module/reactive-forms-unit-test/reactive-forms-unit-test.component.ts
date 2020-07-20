import {
  FormGroup,
  FormBuilder,
  Validators,
  RequiredValidator,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-unit-test',
  templateUrl: './reactive-forms-unit-test.component.html',
  styleUrls: ['./reactive-forms-unit-test.component.scss'],
})
export class ReactiveFormsUnitTestComponent {
  form: FormGroup;
  constructor(formBilder: FormBuilder) {
    this.form = formBilder.group({
      login: ['', Validators.required],
      email: [''],
    });
  }
}
