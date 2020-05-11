import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
 // { path: 'plat', component: PlatComponent },
 //{path: 'plat' ,loadChildren: 'app/feature/plat/plat.module#PlatModule'},
 {path: 'plat' ,loadChildren: () => import('./feature/plat/plat.module').then(m => m.PlatModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

