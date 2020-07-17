import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share.module';

import { GuiTestAreaComponent } from './gui-test-area/gui-test-area.component';
import { LogBoxComponent } from './log-box/log-box.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import { BoxPhComponent } from './box-ph/box-ph.component';



@NgModule({
  declarations: [GuiTestAreaComponent, LogBoxComponent, BoxPhComponent],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
  ],
    exports: [
        GuiTestAreaComponent,
        LogBoxComponent,
        BoxPhComponent,
    ]
})
export class GuiElementsModule { }
