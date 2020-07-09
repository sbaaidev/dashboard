import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryId: number;
  nameCategory: string = '';
  category: Category;
  productDetails = false;
  err: string;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategorys();
  }

  getAllCategorys() {
    this.categories = [];
    this.categoryService
      .getcategorys()
      .subscribe((data) => (this.categories = data));
  }

  viewCategoryDetails(id) {
    this.categoryId = id;
    this.productDetails = true;
  }

  addNewCategory() {
    this.category = {
      name: this.nameCategory,
    };

    this.categoryService
      .addCategory(this.category)
      .subscribe((result) => {
        this.reloadData();
      });
  }

  reloadData() {
    this.getAllCategorys();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.reloadData();
    });
  }
}
