package com.realnet.comm.service;

import java.util.List;

import com.realnet.comm.entity.Department;
import com.realnet.comm.repository.departmentrepository;
import com.realnet.exceptions.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class departmentserviceimpl implements departmentservice {

    @Autowired
    private departmentrepository deptrepo;

    @Override
    public Page<Department> getAll(Pageable page) {

        Page<Department> find = this.deptrepo.findAll(page);

        return find;
    }

    // public List<Department> getdept()
    // {
    // List<Department> findAll = deptrepo.findAll();
    // return findAll;
    // }

    @Override
    public List<Department> save(List<Department> department) {
        List<Department> saveAll = deptrepo.saveAll(department);
        return saveAll;
    }

    @Override
    public Department getone(int id) {
        Department dept = deptrepo.findById(id).
        		orElseThrow(() -> new ResourceNotFoundException("department not found :: " + id));;
        return dept;
    }

    @Override
    public Department updatedept(int id, Department dept) {
        Department dep = deptrepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("department not found :: " + id));

        dep.setDcontact(dept.getDcontact());
        dep.setDhead(dept.getDhead());
        dep.setDname(dept.getDname());
        dep.setNo_ofEmp(dept.getNo_ofEmp());
        final Department newdept = deptrepo.save(dep);

        return newdept;
    }

    @Override
    public boolean delete(int id) {
        if (!deptrepo.existsById(id)) {
			
            throw new ResourceNotFoundException(" not found :: " + id);
		}
		
		Department sale = deptrepo.findById(id).orElse(null);
		deptrepo.delete(sale);
        return true;
    }
    
    
}
