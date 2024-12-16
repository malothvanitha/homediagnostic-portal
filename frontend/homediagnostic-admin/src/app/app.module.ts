import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestCreateComponent } from './components/test-create/test-create.component';
import { TestCategoryListComponent } from './components/test-category-list/test-category-list.component';
import { TestCategoryCreateComponent } from './components/test-category-create/test-category-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestCreateComponent,
    TestCategoryListComponent,
    TestCategoryCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
