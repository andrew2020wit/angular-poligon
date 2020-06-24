import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RoutingModule} from '../routing/routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {ShareModule} from '../share.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
    ShareModule
  ]
})
export class MainLayoutModule { }
