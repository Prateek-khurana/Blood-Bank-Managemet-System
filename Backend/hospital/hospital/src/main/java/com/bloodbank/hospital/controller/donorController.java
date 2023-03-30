package com.bloodbank.hospital.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.hospital.model.donor;
import com.bloodbank.hospital.services.donorService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("*")
public class donorController {
	@Autowired
	private donorService service;

	@GetMapping("/donor-list")
	public Iterable<donor> getAllPatients() {
		return service.allDonors();
	}

	@GetMapping("/donor-list/{donorId}")
	public Optional<donor> findPatientById(@PathVariable int donorId) {
		return service.getDonorById(donorId);
	}

	@GetMapping("/donor-list/{name}/{email}")
	public Optional<donor> findByNameAndEmail(@PathVariable String name, @PathVariable String email) {
		return service.getByNameAndEmail(name, email);
	}
	
	@GetMapping("/donor-id/{name}/{email}")
	public int findDonorIdByNameAndEmail(@PathVariable String name, @PathVariable String email) {
		try {
			return service.getIdByNameAndEmail(name, email);
		}
		catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}


	@PostMapping("/addDonor")
	public donor addDonor(@RequestBody donor d) {
		return service.addDonorToRepo(d);
	}
}
