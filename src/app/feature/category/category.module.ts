import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  declarations: [CategoryComponent, CategoryDetailComponent, CategoryEditComponent],
  imports: [CommonModule, CategoryRoutingModule, HttpClientModule, FormsModule],
  providers: [CategoryService],
})
export class CategoryModule {}