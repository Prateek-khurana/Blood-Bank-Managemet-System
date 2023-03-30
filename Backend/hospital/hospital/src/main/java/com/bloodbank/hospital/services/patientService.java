package com.bloodbank.hospital.services;

import java.util.Optional;

import com.bloodbank.hospital.model.patient;

public interface patientService {
	public Iterable<patient> allPatients();
	public Optional<patient> getPatientById(int id);
	public Optional<patient> getByNameAndEmail(String name,String email);
	public patient addPatient(patient p);
	public int findIdByNameAndEmail(String name,String email);
}
