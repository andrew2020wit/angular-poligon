import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngrx1Component } from './ngrx1.component';
import { NestNgrxClientComponent } from './nest-ngrx-client/nest-client.component';

@NgModule({
  declarations: [Ngrx1Component, NestNgrxClientComponent],
  imports: [CommonModule],
})
export class Ngrx1Module {}
