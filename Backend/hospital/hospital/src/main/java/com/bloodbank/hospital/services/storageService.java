package com.bloodbank.hospital.services;

import java.util.Optional;

import com.bloodbank.hospital.model.storage;

public interface storageService {
	public Iterable<storage> getAllGroups();
	public Optional<storage> getBloodByBloodGroup(String group);
}
