package com.realnet.comm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.comm.entity.salesperson;

@Repository
public interface salesperson_repository extends JpaRepository<salesperson, Integer> {

}
