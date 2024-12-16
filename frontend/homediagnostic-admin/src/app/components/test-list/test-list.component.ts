import { Component } from '@angular/core';
import { Test } from '../../common/test';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-list',
  standalone: false,
  
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css'
})
export class TestListComponent {
  tests: Test[] = [];

  constructor(private testService: TestService) { }

      listTests(){
        this.testService.getTestList().subscribe((data) =>{
          this.tests= data;
          console.log(data);
        });
      }

  ngOnInit(){
    this.listTests();
  }
}