import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryDetailComponent} from "./modules/feature/category/category-detail/category-detail.component";


const routes: Routes = [
 // { path: 'plat', component: PlatComponent },
 // {path: 'plat' , loadChildren: 'app/feature/plat/plat.module#PlatModule'},
 {path: 'plat' , loadChildren: () => import('./modules/feature/plat/plat.module').then(m => m.PlatModule)},
  {path: 'serveur' , loadChildren: () => import('./modules/feature/serveur/serveur.module').then(m => m.ServeurModule)},
  {path: 'table' , loadChildren: () => import('./modules/feature/table/table.module').then(m => m.TableModule)},
  {path: 'category' , loadChildren: () => import('./modules/feature/category/category.module').then(m => m.CategoryModule)}



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

