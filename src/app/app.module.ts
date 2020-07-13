import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

import { BasesModule } from './bases/bases.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { RoutingModule } from './routing/routing.module';
import { DirectivesModule } from './directives/directives/directives.module';
import {GuiElementsModule} from './gui-elements/gui-elements.module';
import { PipesComponent } from './pipes/pipes.component';
import { TextSpoilerPipe } from './pipes/text-spoiler.pipe';
import {RxModule} from './rx/rx.module';
import {ShareModule} from './share.module';
import {DemoMaterialModule} from './demo-material/demo-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MAT_DATE_LOCALE} from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    PipesComponent,
    TextSpoilerPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    BasesModule,
    GuiElementsModule,
    LayoutModule,
    DirectivesModule,
    RxModule,
    ShareModule,
    DemoMaterialModule,
    MainLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ru-ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
