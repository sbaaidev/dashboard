import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "./category.service";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cats: Category[]=[];


  //idcat: number=0;
  constructor(private services:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategorys();
  }

  getAllCategorys(){
    this.services.getcategorys().subscribe(data=>this.cats=data)
  }


}
