package com.bloodbank.hospital.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.storage;
import com.bloodbank.hospital.repositories.StorageRepository;
import com.bloodbank.hospital.services.storageService;

@Service
public class storageServiceImpl implements storageService{
	
	@Autowired
	private StorageRepository storagerepo;

	@Override
	public Iterable<storage> getAllGroups() {
		return storagerepo.findAll();
	}

	@Override
	public Optional<storage> getBloodByBloodGroup(String group) {
		return storagerepo.findById(group);
	}

}
