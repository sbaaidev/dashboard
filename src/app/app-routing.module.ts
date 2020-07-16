import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryDetailComponent} from './feature/category/category-detail/category-detail.component';
import {AppComponent} from './app.component';
import {NoPageFoundComponent} from './feature/no-page-found/no-page-found.component';


const routes: Routes = [
  {path: 'home', component: NoPageFoundComponent},
  {path: 'plat', loadChildren: () => import('./feature/plat/plat.module').then(m => m.PlatModule)},
  {path: 'serveur', loadChildren: () => import('./feature/serveur/serveur.module').then(m => m.ServeurModule)},
  {path: 'table', loadChildren: () => import('./feature/table/table.module').then(m => m.TableModule)},
  {path: 'category', loadChildren: () => import('./feature/category/category.module').then(m => m.CategoryModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

