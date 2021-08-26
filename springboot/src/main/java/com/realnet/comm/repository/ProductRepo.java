package com.realnet.comm.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.realnet.comm.entity.Product;

@Transactional
public interface ProductRepo extends JpaRepository<Product, Integer> {
    public List<Product> findAll();
    public Page<Product> findAll(Pageable p);
    Optional<Product> findOneById(Integer id);

    //Product save(Product p);
    //void delete(Product p) ;
    //void delete(Integer id);
    //Product deleteById(Integer id);
    //boolean exists( Integer id);
}

