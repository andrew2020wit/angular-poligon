import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  profileForm: FormGroup;
  story = {
    story1: '',
    storyFW: '',
    storyContacts: ''
  };
  minDateBD: Date;
  maxDateBD: Date;
  phonePrefix = '+380-';
  bestFrameworkArr: string[] = [
    'Angular',
    'AnguBengu',
    'React',
    'Rewrite',
    'View',
    'Viezzz'
  ];
  filteredOptionsBF: Observable<string[]>;
  constructor(public formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      personName: ['', Validators.required],
      birthday: [0, Validators.required],
      bestFramework: ['', Validators.required],
      chFW: this.formBuilder.group({
        chAngular: [false],
        chReact: [false],
        chView: [false]
        }),
      contacts: this.formBuilder.group({
        email: ['', [Validators.email, Validators.required] ],
        telephone: ['', Validators.pattern( '([0-9]-?){9}' )],
        address: ['']
      })
    });
    const currentYear = new Date().getFullYear();
    this.minDateBD = new Date(currentYear - 150, 0, );
    this.maxDateBD = new Date(currentYear - 1, 0, 0);
  }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe(v => {
      console.log(v);
      this.createHistory();
    });

    this.filteredOptionsBF = this.profileForm.get('bestFramework').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.bestFrameworkArr.filter(option => option.toLowerCase().includes(filterValue));
  }

  createHistory() {

    // My name is
    const myName = `Hello! My name is ${(this.profileForm.value.personName || 'Anonimus')}.`;

    // I was born in , I'm ${age} years old.
    let storyBD = '';
    const dataBD = this.profileForm.get('birthday').value;
    if (dataBD) {
      const age = Math.floor(((new Date()).getTime() - dataBD.getTime()) / (24 * 3600 * 1000 * 365));
      storyBD = ` I was born in ${dataBD.getDate()}/${dataBD.getMonth() + 1}/${dataBD.getFullYear()}.`;
      storyBD += ` I'm ${age} years old.`;
    }
    // I use
    const arrFW: string[] = [];
    let useFW = '';
    if (this.profileForm.get('chFW').get('chAngular').value) { arrFW.push(`Angular`); }
    if (this.profileForm.get('chFW').get('chReact').value) { arrFW.push(`React`); }
    if (this.profileForm.get('chFW').get('chView').value) { arrFW.push(`View`); }
    if (arrFW.length === 0) { useFW = 'I do not use any framework'; } else {
      useFW = 'I use';
      for ( let i = 0; i < arrFW.length; i++ ) {
        useFW = useFW + ' ' + arrFW[i];
        if (i === (arrFW.length - 1)) { useFW += '.'; } else { useFW += ','; }
      }
    }
    // My prefer framework
    let preferFramework = '';
    const pf = this.profileForm.get('bestFramework').value;
    if (pf) { preferFramework = ` My prefer framework is ${pf}.`; }

    // Contacts
    let contStoryTel = '';
    const tel = this.profileForm.get('contacts').get('telephone').value;
    const em = this.profileForm.get('contacts').get('email').value;
    const addr = this.profileForm.get('contacts').get('address').value;
    if (tel) { contStoryTel = ` Call me to ${this.phonePrefix}${tel}.`; }
    if (em) {contStoryTel += ` Send me email (${em}).`; }
    if (addr) {contStoryTel += ` Come to visit me: ${addr}, but don't forget the cookies!`; }

    // Summery
    this.story.story1 = myName + storyBD;
    this.story.storyFW = useFW + preferFramework;
    this.story.storyContacts = contStoryTel;

  }

  Submit() {
    alert('Your story send to server!');
  }
}
