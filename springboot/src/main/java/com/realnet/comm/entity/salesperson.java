package com.realnet.comm.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Entity
public class salesperson {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Pid;
	private String 	Pname;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonBackReference
	private sales sales;
}
