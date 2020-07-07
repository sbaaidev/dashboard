import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryId: number;
  productDetails = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategorys();
  }

  getAllCategorys() {
    this.categoryService.getcategorys().subscribe(
      data => this.categories = data
    );
  }

  viewCategoryDetails(id) {
    this.categoryId = id;
    this.productDetails = true;
  }

}
