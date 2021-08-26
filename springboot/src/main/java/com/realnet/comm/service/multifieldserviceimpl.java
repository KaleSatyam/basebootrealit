package com.realnet.comm.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.realnet.comm.entity.MultifieldForm;
import com.realnet.comm.repository.multifield;

@Service
public class multifieldserviceimpl implements multifieldservice {

		@Autowired private multifield multirepo ;
	
	@Override
	public MultifieldForm addfield(MultifieldForm multifield) {
		// TODO Auto-generated method stub
		MultifieldForm save = multirepo.save(multifield);
		return save;
	}

	
}
