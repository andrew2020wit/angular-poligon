import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share.module';

import { GuiTestAreaComponent } from './gui-test-area/gui-test-area.component';
import { LogBoxComponent } from './log-box/log-box.component';
import {RoutingModule} from '../routing/routing.module';
import {FormsModule} from '@angular/forms';
import { BoxPhComponent } from './box-ph/box-ph.component';



@NgModule({
  declarations: [GuiTestAreaComponent, LogBoxComponent, BoxPhComponent],
  imports: [
    CommonModule,
    ShareModule,
    RoutingModule,
    FormsModule,
  ],
    exports: [
        GuiTestAreaComponent,
        LogBoxComponent,
        BoxPhComponent,
    ]
})
export class GuiElementsModule { }
