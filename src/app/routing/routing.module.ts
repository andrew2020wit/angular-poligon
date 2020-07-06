import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BindingsComponent} from '../bases/bindings/bindings.component';
import {FormsComponent} from '../forms/forms.component';
import {ParentComponent} from '../bases/parent/parent.component';
import {NotFoundPageComponent} from '../main-layout/not-found-page/not-found-page.component';
import {HomePageComponent} from '../main-layout/home-page/home-page.component';
import {DirectivesComponent} from '../directives/directives/directives.component';
import {PipesComponent} from '../pipes/pipes.component';
import {RxIntroComponent} from '../RxModule/rx-intro-component/rx-intro.component';
import {HttpComponent} from '../RxModule/http/http.component';
import {DemoMaterialComponent} from '../demo-material/demo-material.component';
import {RxmoduleComponent} from '../RxModule/rxmodule.component';
import {AnimationsComponent} from '../bases/animations/animations.component';
import {TablesComponent} from '../demo-material/tables/tables.component';
import {TempComponent} from '../bases/temp/temp.component';
import {GuiTestAreaComponent} from '../gui-elements/gui-test-area/gui-test-area.component';
import {FlexboxesComponent} from '../bases/flexboxes/flexboxes.component';
import {GridComponent} from '../bases/grid/grid.component';
import {TestAreaComponent} from '../bases/test-area/test-area.component';

const appRoutes: Routes = [
  { path: 'bindings', component: BindingsComponent, pathMatch: 'full' },
  { path: 'test-area', component: TestAreaComponent, pathMatch: 'full' },
  { path: 'temp-component', component: TempComponent, pathMatch: 'full' },
  { path: 'flex-boxes', component: FlexboxesComponent, pathMatch: 'full' },
  { path: 'grid', component: GridComponent, pathMatch: 'full' },
  { path: 'parent', component: ParentComponent, pathMatch: 'full' },
  { path: 'directives', component: DirectivesComponent, pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent, pathMatch: 'full' },
  { path: 'forms', component: FormsComponent, pathMatch: 'full' },
  { path: 'animations', component: AnimationsComponent, pathMatch: 'full' },
  { path: 'rx', component: RxmoduleComponent, children: [
      { path: 'rx-intro', component: RxIntroComponent},
      { path: 'http', component: HttpComponent, pathMatch: 'full' },
    ] },
  { path: 'demo-material', component: DemoMaterialComponent, children: [
      { path: 'tables', component: TablesComponent, pathMatch: 'full' },
      { path: 'gui-test-area', component: GuiTestAreaComponent, pathMatch: 'full' },
    ] },
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }




