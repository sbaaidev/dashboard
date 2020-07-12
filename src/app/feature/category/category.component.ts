import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../../models/category';
import {UploadFileService} from 'src/app/core/services/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryId: number;
  nameCategory: string = '';
  category: Category;
  productDetails = false;
  productEdit = false;
  err: string;

  //file props
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  constructor(
    private categoryService: CategoryService,
    private uploadService: UploadFileService
  ) {
  }

  ngOnInit(): void {
    this.getAllCategorys();
    //this.fileInfos = this.uploadService.getFiles();
  }

  getAllCategorys() {
    this.categories = [];
    this.categoryService
      .getcategorys()
      .subscribe((data) => (this.categories = data));
  }

  public reloadData() {
    this.getAllCategorys();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((data) => {
      this.reloadData();
    });
  }

  viewCategoryDetails(id) {
    this.categoryId = id;
    this.productDetails = true;
  }

  editCategory(id) {
    this.categoryId = id;
    this.productEdit = true;
  }

  addNewCategory() {
    this.category = {
      name: this.nameCategory,
    };

    this.categoryService
      .addCategory(this.category)
      .subscribe((result) => {
          this.upload();
          setTimeout(() => {
            this.reloadData();
          }, 1000);

        }
      );

    this.nameCategory = '';
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          // this.fileInfos = this.uploadService.getFiles();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }
}
