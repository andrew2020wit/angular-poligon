import { ShareModule } from './../share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxIntroComponent} from './rx-intro-component/rx-intro.component';
import {FormsModule} from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { RxmoduleComponent } from './rxmodule.component';
import { RoutingModule } from '../routing/routing.module';
import {GuiElementsModule} from '../gui-elements/gui-elements.module';
import { HttpJsonplaceholderComponent } from './http-jsonplaceholder/http-jsonplaceholder.component';

@NgModule({
  declarations: [
    RxIntroComponent,
    HttpComponent,
    RxmoduleComponent,
    HttpJsonplaceholderComponent],
  exports: [RxIntroComponent, HttpComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ShareModule,
    GuiElementsModule,
  ]
})
export class RxModule { }
