import { Component } from '@angular/core';
import { TestCategory } from '../../common/test-category';
import { TestCategoryService } from '../../services/test-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-category-list',
  standalone: false,
  
  templateUrl: './test-category-list.component.html',
  styleUrl: './test-category-list.component.css'
})
export class TestCategoryListComponent {
  testCategories: TestCategory[] = []


  constructor(
    private testCategoryService: TestCategoryService,
    private router: Router
  ) { }


  listTestCategory(){
    this.testCategoryService.getTestCategories().subscribe((data) => {
      this.testCategories = data;
      console.log(data);
    });
  }
  ngOnInit(){
    this.listTestCategory();
  }

  removeCategory(id: number){
    if(confirm('Are you sure to delete?')){
      this.testCategoryService
       .deleteTestCategory(id)
       .subscribe((data) => {
        alert('Category is removed!');
        this.listTestCategory();
      });
    }
  }

  showTestCategoryEdit(id: number){
    this.router.navigate(['list-category-edit', id]);
  }

}