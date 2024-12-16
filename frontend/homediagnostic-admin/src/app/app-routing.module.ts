import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCategoryListComponent } from './components/test-category-list/test-category-list.component';
import { TestCreateComponent } from './components/test-create/test-create.component';
import { TestCategoryCreateComponent } from './components/test-category-create/test-category-create.component';
import { TestListComponent } from './components/test-list/test-list.component';

const routes: Routes = [
  {path: 'test-list', component: TestListComponent},
  {path: 'test-create', component: TestCreateComponent},
  {path: 'test-category-list', component: TestCategoryListComponent},
  {path: 'test-category-create', component: TestCategoryCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
