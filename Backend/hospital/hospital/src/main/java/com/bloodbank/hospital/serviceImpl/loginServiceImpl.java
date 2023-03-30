package com.bloodbank.hospital.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.staff;
import com.bloodbank.hospital.repositories.staffRepository;
import com.bloodbank.hospital.services.loginService;

@Service
public class loginServiceImpl implements loginService{
	
	@Autowired
	private staffRepository repo;

	@Override
	public staff findByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

	@Override
	public staff findStaffByEmail(String email) {
		 return repo.findByEmail(email);
	}
	}
