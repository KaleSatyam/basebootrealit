package com.realnet.comm.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.realnet.fnd.entity.Rn_AuditEntity;
import com.realnet.fnd.entity.Rn_Who_Columns;

import lombok.Data;

@Data
@Entity
public class Department extends Rn_AuditEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Did;
    private String Dname;
    private String Dhead;
    private long Dcontact;
    private int No_ofEmp;
 
}
