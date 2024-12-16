package com.edubridge.honediagnostic.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.edubridge.honediagnostic.entity.Test;


@Repository
public interface TestRepository extends JpaRepository<Test, Long> {


}
