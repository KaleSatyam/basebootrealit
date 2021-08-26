package com.realnet.comm.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.realnet.comm.entity.Rn_Instructor;
import com.realnet.comm.repository.Rn_Instructor_Repository;
import com.realnet.exceptions.ResourceNotFoundException;

@Service
public class Rn_InstructorServiceImpl implements Rn_Instructor_Service {
	private static final Logger logger = LoggerFactory.getLogger(Rn_Instructor_Service.class);

	@Autowired
	private Rn_Instructor_Repository rn_instructor_repository;

	public List<Rn_Instructor> getAllInstructor() {
		return rn_instructor_repository.findAll();
	}

	public Rn_Instructor getInstructorById(Integer id) {
		Optional<Rn_Instructor> instuctor = rn_instructor_repository.findById(id);
		//logger.info(instuctor.toString());
		
		return rn_instructor_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Instructor not found :: " + id));
	}

	public Rn_Instructor saveNewInstructor(Rn_Instructor instructor) {
		return rn_instructor_repository.save(instructor);
	}

	public Rn_Instructor updateInstructorById(Integer id, Rn_Instructor instructor) throws ResourceNotFoundException {
		Rn_Instructor rn_instructor = rn_instructor_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Instructor not found :: " + id));
		rn_instructor.setFirstName(instructor.getFirstName());
		rn_instructor.setLastName(instructor.getLastName());
		rn_instructor.setEmail(instructor.getEmail());
		final Rn_Instructor updatedUser = rn_instructor_repository.save(rn_instructor);
		return updatedUser;
		}

	public void deleteInstructorById(Integer id) throws ResourceNotFoundException {
		Rn_Instructor instructor = rn_instructor_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Instructor not found :: " + id));
		rn_instructor_repository.delete(instructor);
	}

	@Override
	public Page<Rn_Instructor> findAll(Pageable p) {
		return rn_instructor_repository.findAll(p);
	}

}
