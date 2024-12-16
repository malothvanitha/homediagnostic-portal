import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCategoryCreateComponent } from './test-category-create.component';

describe('TestCategoryCreateComponent', () => {
  let component: TestCategoryCreateComponent;
  let fixture: ComponentFixture<TestCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCategoryCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
