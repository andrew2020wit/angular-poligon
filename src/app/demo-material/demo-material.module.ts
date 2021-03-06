import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoMaterialComponent} from './demo-material.component';
import {ShareModule} from '../share.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {TablesComponent} from './tables/tables.component';
import { PlatformCdkComponent } from './platform-cdk/platform-cdk.component';


@NgModule({
  declarations: [DemoMaterialComponent, TablesComponent, PlatformCdkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [DemoMaterialComponent]
})
export class DemoMaterialModule {
}
