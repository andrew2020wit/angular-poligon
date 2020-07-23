import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { CrazyStyleDirective } from './crazy-style.directive';

@NgModule({
  declarations: [DirectivesComponent, CrazyStyleDirective],
  exports: [DirectivesComponent, CrazyStyleDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
