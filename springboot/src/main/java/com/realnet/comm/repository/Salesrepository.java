package com.realnet.comm.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.comm.entity.Teacher;
import com.realnet.comm.entity.sales;

@Repository
public interface Salesrepository extends JpaRepository<sales, Integer> {

	// for pagination
		Page<sales> findAll(Pageable p);
}
