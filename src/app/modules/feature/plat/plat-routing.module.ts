import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlatComponent } from './plat.component';

export const platRouteList: Routes = [
{path: '',component:PlatComponent }

];

@NgModule({
  imports: [
      RouterModule.forChild(platRouteList)
  ],
  exports:[RouterModule]
})
export class PlatRoutingModule {
}
