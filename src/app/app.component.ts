import {Component, ViewChild} from '@angular/core';
import {ContentService} from './main-layout/content.service';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOn = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(public contentService: ContentService) {
  }
}
