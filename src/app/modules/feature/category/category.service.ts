import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getcategorys() {
    return this.http.get<Category[]>('http://localhost:8080/api/categorys');
  }

  getCategorysById(id: number) {
    return this.http.get<Category>('http://localhost:8080/api/categorys/' + id);
  }
}
