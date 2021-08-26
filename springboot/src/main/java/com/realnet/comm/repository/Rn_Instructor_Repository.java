package com.realnet.comm.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.comm.entity.Rn_Instructor;

@Repository
public interface Rn_Instructor_Repository extends JpaRepository<Rn_Instructor, Integer> {
	// for pagination
	Page<Rn_Instructor> findAll(Pageable p);
	
	//@Query(value = "SELECT * FROM RN_INSTRUCTOR WHERE id = ?1" , nativeQuery = true)
	//Optional<Rn_Instructor> findById(Integer id);
}
