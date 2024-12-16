import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestCategoryService } from '../../services/test-category.service';
import { Router } from '@angular/router';
import { TestCategory } from '../../common/test-category';

@Component({
  selector: 'app-test-category-create',
  standalone: false,
  
  templateUrl: './test-category-create.component.html',
  styleUrl: './test-category-create.component.css'
})
export class TestCategoryCreateComponent {
  categoryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private testCategoryService: TestCategoryService,
    private router: Router
  ) { }
  ngOnInit() {
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        categoryName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]
      }),
    });
  }

  get categoryName() {
    return this.categoryFormGroup.get('category.categoryName');

  }
  onSubmit() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let testCategory = new TestCategory();

    testCategory = this.categoryFormGroup.controls['category'].value;


    this.testCategoryService
      .createTestCategory(testCategory)
      .subscribe((data) => {
        alert('New category is added!');
        this.router.navigateByUrl('/test-category-list');
      });


  }

}
