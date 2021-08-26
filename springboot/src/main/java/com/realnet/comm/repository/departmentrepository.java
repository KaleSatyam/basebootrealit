package com.realnet.comm.repository;

import com.realnet.comm.entity.Department;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface departmentrepository  extends JpaRepository<Department,Integer>{

    
    
}
