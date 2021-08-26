package com.realnet.comm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.realnet.comm.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    public List<Customer> findAll();
    public Page<Customer> findAll(Pageable p);
    public Customer save(Customer customer);
    //void delete(Customer c);
    //void delete(Integer id);
    //boolean exists( Integer id);


}

