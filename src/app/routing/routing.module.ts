import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BindingsComponent} from '../bases/bindings/bindings.component';
import {FormsComponent} from '../forms/forms.component';
import {ParentComponent} from '../bases/parent/parent.component';
import {NotFoundPageComponent} from '../main-layout/not-found-page/not-found-page.component';
import {HomePageComponent} from '../main-layout/home-page/home-page.component';
import {DirectivesComponent} from '../directives/directives/directives.component';
import {PipesComponent} from '../pipes/pipes.component';
import {RxIntroComponent} from '../rx/rx-intro-component/rx-intro.component';
import {HttpComponent} from '../rx/http/http.component';
import {DemoMaterialComponent} from '../demo-material/demo-material.component';
import {RxmoduleComponent} from '../rx/rxmodule.component';
import {AnimationsComponent} from '../bases/animations/animations.component';
import {TablesComponent} from '../demo-material/tables/tables.component';
import {TempComponent} from '../bases/temp/temp.component';
import {GuiTestAreaComponent} from '../gui-elements/gui-test-area/gui-test-area.component';
import {FlexboxesComponent} from '../bases/flexboxes/flexboxes.component';
import {GridComponent} from '../bases/grid/grid.component';
import {TestAreaComponent} from '../bases/test-area/test-area.component';
import {PlatformCdkComponent} from '../demo-material/platform-cdk/platform-cdk.component';
import {HttpJsonplaceholderComponent} from '../rx/http-jsonplaceholder/http-jsonplaceholder.component';

const appRoutes: Routes = [
  { path: 'bindings', component: BindingsComponent},
  { path: 'test-area', component: TestAreaComponent},
  { path: 'temp-component', component: TempComponent},
  { path: 'flex-boxes', component: FlexboxesComponent},
  { path: 'grid', component: GridComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'animations', component: AnimationsComponent},
  { path: 'rx', component: RxmoduleComponent, children: [
      { path: 'rx-intro', component: RxIntroComponent},
      { path: 'http', component: HttpComponent},
      { path: 'http-json-placeholder', component: HttpJsonplaceholderComponent},
    ] },
  { path: 'demo-material', component: DemoMaterialComponent, children: [
      { path: 'tables', component: TablesComponent},
      { path: 'gui-test-area', component: GuiTestAreaComponent},
      { path: 'platform-cdk', component: PlatformCdkComponent},
    ] },
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }




