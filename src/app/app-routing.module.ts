import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {PlatComponent} from './components/plat/plat.component';

const routes: Routes = [
  { path: 'plat', component: PlatComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  PlatComponent
]
