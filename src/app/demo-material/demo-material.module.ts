import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialComponent } from './demo-material.component';
import {ShareModule} from '../share.module';
import {FormsModule} from '@angular/forms';
import { RoutingModule } from '../routing/routing.module';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [DemoMaterialComponent, TablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RoutingModule,
  ],
  exports: [DemoMaterialComponent]
})
export class DemoMaterialModule { }
