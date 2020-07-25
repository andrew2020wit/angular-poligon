import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngrx1Component } from './ngrx1.component';
import { reducer } from './ngrx-store/users/users.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [Ngrx1Component],
  imports: [CommonModule],
})
export class Ngrx1Module {}
