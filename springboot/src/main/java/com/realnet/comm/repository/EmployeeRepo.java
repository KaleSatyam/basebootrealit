package com.realnet.comm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.realnet.comm.entity.Employee;


public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    public List<Employee> findAll();
    public Page<Employee> findAll(Pageable p);
    Employee save(Employee e);
    //void delete(Employee e);
    //void delete(Integer id);
    //boolean exists( Integer id);
}

