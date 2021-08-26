package com.realnet.comm.entity;

import java.io.File;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
@Entity
@Table
public class MultifieldForm {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; 
	private String  textfield;
	private String textarea;
	private String url;
	private String email;
	private String dropdown;
	private String checkbox;
	private String radiabutton;
	private boolean togglebutton;
	private Date date;
	private String autocomplete;
	private String uploadfile;
	private int currency;
	private String contact;
	private String multiselect_dropdwn;
	private String masking;

		
}

/*
 * textfield', 'textarea', 'url', 'email', 'dropdown', 'checkbox',
    'togglebutton', 'datetime', 'autocomplete', 'upload_field', 'currency_field', 'contact_field',
    'multiselect_autocomplete', 'multiselect_dropdown', 'masked'
 */
