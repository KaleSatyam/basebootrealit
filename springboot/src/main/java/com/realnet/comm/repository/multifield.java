package com.realnet.comm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.comm.entity.MultifieldForm;

@Repository
public interface multifield extends JpaRepository<MultifieldForm, Integer> {

}
