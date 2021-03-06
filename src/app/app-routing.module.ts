import { DinamicComponent } from './bases/dinamic/dinamic.component';
import { NestNgrxClientComponent } from './ngrx1/nest-ngrx-client/nest-client.component';
import { Ngrx1Component } from './ngrx1/ngrx1.component';
import { ExitSecretGuard } from './bases/secret/exit-secret.guard';
import { SecretGuard } from './bases/secret/secret.guard';
import { SecretComponent } from './bases/secret/secret.component';
import { Route2Component } from './bases/route2/route2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BindingsComponent } from './bases/bindings/bindings.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './bases/parent/parent.component';
import { NotFoundPageComponent } from './main-layout/not-found-page/not-found-page.component';
import { HomePageComponent } from './main-layout/home-page/home-page.component';
import { DirectivesComponent } from './directives/directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxIntroComponent } from './rx/rx-intro-component/rx-intro.component';
import { HttpComponent } from './rx/http/http.component';
import { DemoMaterialComponent } from './demo-material/demo-material.component';
import { RxmoduleComponent } from './rx/rxmodule.component';
import { AnimationsComponent } from './bases/animations/animations.component';
import { TablesComponent } from './demo-material/tables/tables.component';
import { TempComponent } from './bases/temp/temp.component';
import { GuiTestAreaComponent } from './gui-elements/gui-test-area/gui-test-area.component';
import { FlexboxesComponent } from './bases/flexboxes/flexboxes.component';
import { GridComponent } from './bases/grid/grid.component';
import { TestAreaComponent } from './testing-module/test-area/test-area.component';
import { PlatformCdkComponent } from './demo-material/platform-cdk/platform-cdk.component';
import { HttpJsonplaceholderComponent } from './rx/http-jsonplaceholder/http-jsonplaceholder.component';
import { IndexedDBLogComponent } from './bases/indexed-dblog/indexed-dblog.component';

const appRoutes: Routes = [
  { path: 'bindings', component: BindingsComponent },
  { path: 'test-area', component: TestAreaComponent },
  { path: 'temp-component', component: TempComponent },
  { path: 'flex-boxes', component: FlexboxesComponent },
  { path: 'grid', component: GridComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'indexed-dblog', component: IndexedDBLogComponent },
  { path: 'route2/id/:id', component: Route2Component },
  { path: 'route2', component: Route2Component },
  { path: 'ngrx1', component: Ngrx1Component },
  { path: 'dinamic-component', component: DinamicComponent },
  { path: 'nest-ngrx', component: NestNgrxClientComponent },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [SecretGuard],
    canDeactivate: [ExitSecretGuard],
  },
  {
    path: 'rx',
    component: RxmoduleComponent,
    children: [
      { path: 'rx-intro', component: RxIntroComponent },
      { path: 'http', component: HttpComponent },
      {
        path: 'http-json-placeholder',
        component: HttpJsonplaceholderComponent,
      },
    ],
  },
  {
    path: 'demo-material',
    component: DemoMaterialComponent,
    children: [
      { path: 'tables', component: TablesComponent },
      { path: 'gui-test-area', component: GuiTestAreaComponent },
      { path: 'platform-cdk', component: PlatformCdkComponent },
    ],
  },
  { path: '', component: HomePageComponent },
  {
    path: 'lazy-module',
    loadChildren: () =>
      import('./lazy-module/lazy-module.module').then(
        (m) => m.LazyModuleModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
