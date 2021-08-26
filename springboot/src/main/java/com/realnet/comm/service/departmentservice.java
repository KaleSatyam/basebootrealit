package com.realnet.comm.service;

import java.util.List;

import com.realnet.comm.entity.Department;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface departmentservice {
    Page<Department> getAll(Pageable paging);
    List<Department> save(List<Department> department);
    Department getone(int id);
    Department updatedept(int id,Department dept);
    boolean delete(int id);

}
