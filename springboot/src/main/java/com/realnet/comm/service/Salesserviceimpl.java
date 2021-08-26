package com.realnet.comm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.realnet.comm.entity.sales;
import com.realnet.comm.repository.Salesrepository;
import com.realnet.exceptions.ResourceNotFoundException;

@Service
public class Salesserviceimpl implements salesservice {

	@Autowired
	Salesrepository salesrepo;
	

	
	//getting data
	public Page<sales> getlist(Pageable page)
	{
		Page<sales> find = this.salesrepo.findAll(page);
		return find;
	}
	
	//creating sales 
	public sales createsale(sales data)
	{
		sales save = this.salesrepo.save(data);
		return save;
	}
	
	//get by id
	public sales getid(int id)
	{
			
			sales teacher = salesrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Te not found :: " + id));
			return teacher;

	}
	
	//update by id
	public sales updateById(int id, sales sale) {
		sales old_sale = salesrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Teacher not found :: " + id));
			
		old_sale.setSname(sale.getSname());
		old_sale.setDepartment(sale.getDepartment());
//		old_sale.setJoiningDate(sale.getJoiningDate());
//		old_sale.setStatus(sale.getStatus());
		old_sale.setSalesperson(sale.getSalesperson());
		old_sale.setExtn1(sale.getExtn1());
		old_sale.setExtn2(sale.getExtn2());
		old_sale.setExtn3(sale.getExtn3());
		old_sale.setExtn4(sale.getExtn4());
		old_sale.setExtn5(sale.getExtn5());
		old_sale.setExtn6(sale.getExtn6());
		old_sale.setExtn7(sale.getExtn7());
		old_sale.setExtn8(sale.getExtn8());
		old_sale.setExtn9(sale.getExtn9());
		old_sale.setExtn10(sale.getExtn10());
		old_sale.setExtn11(sale.getExtn11());
		old_sale.setExtn12(sale.getExtn12());
		old_sale.setExtn13(sale.getExtn13());
		old_sale.setExtn14(sale.getExtn14());
		old_sale.setExtn15(sale.getExtn15());
		old_sale.setFlex1(sale.getFlex1());
		old_sale.setFlex2(sale.getFlex2());
		old_sale.setFlex3(sale.getFlex3());
		old_sale.setFlex4(sale.getFlex4());
		old_sale.setFlex5(sale.getFlex5());
		
		old_sale.setUpdatedBy(sale.getUpdatedBy());
		old_sale.setUpdatedBy(sale.getUpdatedBy());




		final sales updated_sale = salesrepo.save(old_sale);

		return updated_sale;
	}
	
	//delete
	public boolean deleteById(int id) {
		if (!salesrepo.existsById(id)) {
			
			throw new ResourceNotFoundException("Sales not found :: " + id);
		}
		
		sales sale = salesrepo.findById(id).orElse(null);
		salesrepo.delete(sale);
		return true;
	}
}
