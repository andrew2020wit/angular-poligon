import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ShareModule } from '../share.module';
import { AnimationsComponent } from './animations/animations.component';
import { TempComponent } from './temp/temp.component';
import { Child2Component } from './child2/child2.component';
import { FlexboxesComponent } from './flexboxes/flexboxes.component';
import { GridComponent } from './grid/grid.component';
import { GuiElementsModule } from '../gui-elements/gui-elements.module';
import { IndexedDBLogComponent } from './indexed-dblog/indexed-dblog.component';
import { Route2Component } from './route2/route2.component';
import { RouterModule } from '@angular/router';
import { SecretComponent } from './secret/secret.component';
import { Ngrx1Component } from './ngrx1/ngrx1.component';

@NgModule({
  declarations: [
    BindingsComponent,
    ParentComponent,
    ChildComponent,
    AnimationsComponent,
    TempComponent,
    Child2Component,
    FlexboxesComponent,
    GridComponent,
    IndexedDBLogComponent,
    Route2Component,
    SecretComponent,
    Ngrx1Component,
  ],
  exports: [BindingsComponent, ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    GuiElementsModule,
    RouterModule,
  ],
})
export class BasesModule {}
