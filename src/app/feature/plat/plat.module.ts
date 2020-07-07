import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatComponent} from './plat.component';
import {PlatRoutingModule} from './plat-routing.module';

@NgModule({
  declarations: [
    PlatComponent
  ],
  imports: [
    CommonModule,
    PlatRoutingModule
  ]
})
export class PlatModule {
}
