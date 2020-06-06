import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
category :Category=null;


  constructor(private catservices:CategoryService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

   const id=this.route.snapshot.params['id'];
    this.catservices.getCategorysById(+id).subscribe(data=>this.category=data)
  }

}
