package com.bloodbank.hospital.services;

import com.bloodbank.hospital.model.staff;

public interface loginService {
	public staff findByEmailAndPassword(String email,String password);
	public staff findStaffByEmail(String email);
}
