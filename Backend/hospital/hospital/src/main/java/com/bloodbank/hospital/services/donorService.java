package com.bloodbank.hospital.services;

import java.util.Optional;

import com.bloodbank.hospital.model.donor;

public interface donorService {
	public Iterable<donor> allDonors();
	public Optional<donor> getDonorById(int id);
	public Optional<donor> getByNameAndEmail(String name,String email);
	public donor addDonorToRepo(donor d);
	public int getIdByNameAndEmail(String name,String email);
}
