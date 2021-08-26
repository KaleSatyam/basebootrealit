package com.realnet.comm.controller;

import com.realnet.comm.entity.Department;
import com.realnet.comm.response.departmentresponse;
import com.realnet.comm.service.departmentservice;
import com.realnet.comm.service.departmentserviceimpl;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api")
@Api(tags = { "Department" })
public class departmentcontroller {

    @Autowired
    departmentservice deptser;
    
    @Autowired
    departmentserviceimpl dser;

    // get all data
    @ApiOperation(value = "list of department", response = departmentresponse.class)
	@GetMapping(path = "/getdept")
	public departmentresponse getdata(@RequestParam(value = "page", defaultValue = "0", required = false) Integer page,
			@RequestParam(value = "size", defaultValue = "20", required = false) Integer size)
	{
		departmentresponse resp=new departmentresponse();
		Pageable paging = PageRequest.of(page, size);
		Page<Department> result = this.deptser.getAll(paging);
		resp.setPageStats(result, true);
		resp.setDepartment(result.getContent());
		return resp;
    }
    
//    @GetMapping("/getdept")
//    public List<Department> getall()
//    {
//    	List<Department> getdept = dser.getdept();
//    	return getdept;
//    }
    
    @ApiOperation(value = "add a sales", response = Department.class)
    @PostMapping("/savedept")
    public ResponseEntity<?> adddept(@RequestHeader(value = HttpHeaders.AUTHORIZATION, 
    required = false) String authToken,
    @RequestBody List<Department> department )
    {
		System.out.println("dept fields" + department.get(0).getExtn1());

		List<Department> save = deptser.save(department);
    	
		if(save==null)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("department not created value empty");
		}
		{
    	return ResponseEntity.status(HttpStatus.CREATED).body(save);  
		}
    }


	@ApiOperation(value = "Get a det", response = Department.class)
	@GetMapping("/getdept/{id}")
	public ResponseEntity<?> getbyid(@PathVariable("id") Integer id)
	{
		 Department getid = this.deptser.getone(id);
		if (getid == null) {
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("department not found");
		}
		return ResponseEntity.ok().body(getid);
	}


	@ApiOperation(value = "update a dept", response = Department.class)
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(
		@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authToken,
		@PathVariable(value = "id") Integer id, @Valid @RequestBody Department dept)
	{
			Department dep= deptser.updatedept(id, dept);
			if (dep == null) {
				return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("department empty");
			}
			return ResponseEntity.ok().body(dep);
	}


	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteTeacher(@PathVariable(value ="id") Integer id) {
		boolean delete = deptser.delete(id);
		if(delete!=true)
		{
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(delete+"department not deleted");
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(delete+"   department deleted");
	}



}
