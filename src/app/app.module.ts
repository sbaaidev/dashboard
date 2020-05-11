import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContentComponent} from './modules/shared/content/content.component'
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { SidebarComponent } from './modules/shared/sidebar/sidebar.component';
import { NoPageFoundComponent } from './modules/feature/no-page-found/no-page-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    NoPageFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
