import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngrx1Component } from './ngrx1.component';
import { StoreModule } from '@ngrx/store';
import * as counterReducer from './ngrx-store/counter.reducer';

@NgModule({
  declarations: [Ngrx1Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      counterReducer.countFeatureKey,
      counterReducer.counterReducer
    ),
  ],
})
export class Ngrx1Module {}
