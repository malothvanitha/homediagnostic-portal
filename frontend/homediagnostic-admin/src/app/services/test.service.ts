import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Test } from '../common/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
/*
http://localhost:8181/api/tests */

constructor(private http: HttpClient ) { }

//get all test deatails
getTestList(){
  const url = 'http://localhost:8181/api/tests';
  return this.http
    .get<GetResponseTests>(url)
    .pipe(map((response) => response._embedded.tests));
}

//add Test details
createTest(id:number, test: Test){
  const url = '	http://localhost:8181/api/v1/category/' + id + '/tests';
  return this.http.post<Test>(url, test);
}
}

interface GetResponseTests {
_embedded: {
  tests: Test[];
}
}