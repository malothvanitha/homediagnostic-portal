package com.edubridge.honediagnostic.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


import com.edubridge.honediagnostic.entity.TestCategory;


@RepositoryRestResource(collectionResourceRel = "testCategory", path="test-category")
public interface TestCategoryRepository extends JpaRepository<TestCategory, Long> {


}
