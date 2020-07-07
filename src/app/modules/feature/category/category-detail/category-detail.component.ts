import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Category} from '../../../../models/category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnChanges {
  category: Category = null;

  @Input() categoryId: number;

  constructor(private categoryServices: CategoryService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.categoryServices.getCategorysById(+this.categoryId).subscribe(
      data => this.category = data
    );
  }
}
