package com.edubridge.honediagnostic.service;


import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.honediagnostic.entity.Test;
import com.edubridge.honediagnostic.entity.TestCategory;
import com.edubridge.honediagnostic.repo.TestCategoryRepository;
import com.edubridge.honediagnostic.repo.TestRepository;


@Service
public class TestCategoryService {
	@Autowired
	private TestCategoryRepository testCategoryRepository;
	
	@Autowired
	private TestRepository testRepository;
	
	public Test addTestToCategory(Long categoryId, Test test) {
		
		Optional<TestCategory>optional = testCategoryRepository.findById(categoryId);
		
		if(optional.isPresent()) {
			TestCategory category = optional.get();
			test.setCategory(category);
			return testRepository.save(test);
		}else {
			throw new RuntimeException("Category not found");
		}
	}
}
