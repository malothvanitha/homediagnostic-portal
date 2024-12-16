package com.edubridge.honediagnostic.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.honediagnostic.entity.Test;
import com.edubridge.honediagnostic.service.TestCategoryService;





@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class TestCategoryController {
	
	@Autowired
	private TestCategoryService testCategoryService;
	/*
	
	http://localhost:8181/api/v1/category/1/tests
	*/
	@PostMapping("/category/{categoryId}/tests")
	public ResponseEntity<Test> addTestToCategory(
			@PathVariable Long  categoryId, @RequestBody Test test){
		
		testCategoryService.addTestToCategory(categoryId, test);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
