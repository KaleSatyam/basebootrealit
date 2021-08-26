package com.realnet.comm.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.realnet.comm.entity.Rn_Instructor;
import com.realnet.exceptions.ResourceNotFoundException;


public interface Rn_Instructor_Service {
	List<Rn_Instructor> getAllInstructor();
	Page<Rn_Instructor> findAll(Pageable p); // pagination
	Rn_Instructor getInstructorById(Integer id);
	Rn_Instructor saveNewInstructor(Rn_Instructor instructor);
	Rn_Instructor updateInstructorById(Integer id, Rn_Instructor instructor) throws ResourceNotFoundException;
	void deleteInstructorById(Integer id) throws ResourceNotFoundException;

}
