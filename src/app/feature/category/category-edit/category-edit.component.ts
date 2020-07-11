import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Category} from '../../../models/category';
import {CategoryService} from '../category.service';
import {CategoryComponent} from '../category.component';
import {UploadFileService} from '../../../core/services/upload-file.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit, OnChanges {
  category: Category = null;
  @Input() categoryId: number = null;
  //file props
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  constructor(private categoryService: CategoryService, private uploadService: UploadFileService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.categoryService.getCategorysById(+this.categoryId).subscribe(
      data => {
        this.category = data;

      }
    );
  }

  editCategory() {
    this.categoryService.editCategory(+this.categoryId, this.category)
      .subscribe(data => {
        this.category = data;
        this.upload();
      }, error => console.log(error));


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
