package com.realnet.fnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.realnet.exceptions.ResourceNotFoundException;
import com.realnet.fnd.entity.Rn_Lookup_Values;
import com.realnet.fnd.repository.Rn_LookUpRepository;
import com.realnet.utils.Constant;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class Rn_LookUp_ServiceImpl implements Rn_LookUp_Service {

	@Autowired
	private Rn_LookUpRepository lookUpRepository;

	@Override
	public List<Rn_Lookup_Values> getAll() {
		return lookUpRepository.findAll();
	}

	@Override
	public Page<Rn_Lookup_Values> getAll(Pageable page) {
		return lookUpRepository.findAll(page);
	}

	@Override
	public Rn_Lookup_Values getById(int id) {
		Rn_Lookup_Values bcf_extractor = lookUpRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(Constant.NOT_FOUND_EXCEPTION + " :" + id));
		return bcf_extractor;
	}

	@Override
	public Rn_Lookup_Values save(Rn_Lookup_Values bcf_extractor) {
		Rn_Lookup_Values savedTechnology = lookUpRepository.save(bcf_extractor);
		return savedTechnology;
	}

	@Override
	public Rn_Lookup_Values updateById(int id, Rn_Lookup_Values lookUpRequest) {
		Rn_Lookup_Values oldLookUp = lookUpRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(Constant.NOT_FOUND_EXCEPTION + " :" + id));
		oldLookUp.setLookupCode(lookUpRequest.getLookupCode());
		oldLookUp.setMeaning(lookUpRequest.getMeaning());
		oldLookUp.setDescription(lookUpRequest.getDescription());
		oldLookUp.setLookupType(lookUpRequest.getLookupType());
		oldLookUp.setActive_start_date(lookUpRequest.getActive_start_date());
		oldLookUp.setActive_end_date(lookUpRequest.getActive_end_date());
		oldLookUp.setEnabled_flag(lookUpRequest.isEnabled_flag());
		// WHO
		oldLookUp.setUpdatedBy(lookUpRequest.getUpdatedBy());
		final Rn_Lookup_Values updatedLookUp = lookUpRepository.save(oldLookUp);
		return updatedLookUp;
	}

	@Override
	public boolean deleteById(int id) {
		if (!lookUpRepository.existsById(id)) {
			throw new ResourceNotFoundException(Constant.NOT_EXIST_EXCEPTION);
		}
		Rn_Lookup_Values bcf_extractor = lookUpRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(Constant.NOT_FOUND_EXCEPTION + " :" + id));
		lookUpRepository.delete(bcf_extractor);
		return true;
	}

	@Override
	public List<String> getLookupValues() {
		return lookUpRepository.findLookupValues();
	}

	@Override
	public List<String> getDataTypeValues() {
		return lookUpRepository.findDataTypeValues();
	}

	@Override
	public List<Rn_Lookup_Values> getExtensions() {
		return lookUpRepository.findExtensions();
	}
	

}
