import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TestCategory } from '../common/test-category';

@Injectable({
  providedIn: 'root'
})
export class TestCategoryService {
  constructor(private http: HttpClient) { }

  getTestCategories() {
    const url = 'http://localhost:8181/api/test-category';
    return this.http
      .get<GetResponseTestCategory>(url)
      .pipe(map((response) => response._embedded.testCategory));
  }

  
  createTestCategory(testCategory: TestCategory){
    const url = 'http://localhost:8181/api/test-category';
    return this.http.post<TestCategory>(url, testCategory);
  }
  deleteTestCategory(id : number){
    const url = 'http://localhost:8181/api/test-category/' + id;
    return this.http.delete<TestCategory>(url);
  }

  getTestCategory(id: number){
    const url = 'http://localhost:8181/api/test-category/' + id;
    return this.http.get<TestCategory>(url);
  }

  updateTestcategory(id: number, testCategory: TestCategory){
    const url = 'http://localhost:8181/api/test-category/' + id;
    return this.http.put<TestCategory>(url, testCategory);
  }
}

interface GetResponseTestCategory {
  _embedded: {
    testCategory: TestCategory[];
  };
}
