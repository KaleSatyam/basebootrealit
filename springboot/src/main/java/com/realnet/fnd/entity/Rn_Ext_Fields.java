package com.realnet.fnd.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RN_EXT_FIELD_T")
public class Rn_Ext_Fields extends Rn_Who_Columns {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;

	@Column(name = "TYPE")
	private String type;

	@Column(name = "FIELD_NAME")
	private String field_name;

	@Column(name = "MAPPING")
	private String mapping;

	@Column(name = "DATA_TYPE")
	private String data_type;

	@Column(name = "FORM_CODE")
	private String form_code;

	@Column(name = "IS_ACTIVE")
	private boolean isActive;

	@Column(name="ACCOUNT_ID")
	private long account_id;
	

//	@Column(name = "SP_NAME_FOR_AUTOCOMPLETE")
//	private String sp_name_for_autocomplete;
//
//	@Column(name = "SP_FOR_AUTOCOMPLETE")
//	private String sp_for_autocomplete;
//
//	@Column(name = "EXT_AUTO_ID")
//	private String ext_auto_id;
//
//	@Column(name = "EXT_DEPENDENT_ID")
//	private String ext_dependent_id;
//
//	@Column(name = "EXT_DD_ID")
//	private String ext_dd_id;
//
//	@Column(name = "SP_NAME")
//	private String sp_name;
//
//	@Column(name = "DROP_VALUE")
//	private String drop_value;
//
//	@Column(name = "DROPDOWN")
//	private String dropdown;
//
//	@Column(name = "MANDATORY")
//	private String mandatory;
//
//	@Column(name = "HIDDEN")
//	p

	public boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}

	// public String getRadio() {
//		return radio;
//	}
//
//	public void setRadio(String radio) {
//		this.radio = radio;
//	}
//
//	public String getRadio_option() {
//		return radio_option;
//	}
//
//	public void setRadio_option(String radio_option) {
//		this.radio_option = radio_option;
//	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

//	public String getValidation_1() {
//		return validation_1;
//	}
//
//	public void setValidation_1(String validation_1) {
//		this.validation_1 = validation_1;
//	}

	public String getForm_code() {
		return form_code;
	}

	public void setForm_code(String form_code) {
		this.form_code = form_code;
	}

	public String getField_name() {
		return field_name;
	}

	public void setField_name(String field_name) {
		this.field_name = field_name;
	}

	public String getMapping() {
		return mapping;
	}

	public void setMapping(String mapping) {
		this.mapping = mapping;
	}

	public String getData_type() {
		return data_type;
	}

	public void setData_type(String data_type) {
		this.data_type = data_type;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public long getAccount_id() {
		return account_id;
	}

	public void setAccount_id(long account_id) {
		this.account_id = account_id;
	}



}
