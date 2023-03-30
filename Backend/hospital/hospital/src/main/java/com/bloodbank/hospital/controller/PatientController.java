package com.bloodbank.hospital.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.hospital.model.patient;
import com.bloodbank.hospital.services.patientService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	private patientService service;

	@GetMapping("/patient-list")
	public Iterable<patient> getAllPatients() {
	 return	service.allPatients();
	}

	@GetMapping("/patient-list/{patientId}")
	public Optional<patient> findPatientById(@PathVariable int patientId)
	{
		return service.getPatientById(patientId);
	}
	
	@GetMapping("/patient-list/{name}/{email}")
	public Optional<patient> findByNameAndEmail(@PathVariable String name,@PathVariable String email)
	{
		return service.getByNameAndEmail(name,email);
	}
	
	@GetMapping("patient-id/{name}/{email}")
	public int getIdByNameAndEmail(@PathVariable String name,@PathVariable String email)
	{ try {
		return service.findIdByNameAndEmail(name, email);
	}
	catch (Exception e) {
		e.printStackTrace();
		System.out.println("Error in Get Id by Name and Email");
		return -1;
	}
	}
	
	@PostMapping("/addPatient")
	public patient addPatientToRepo(@RequestBody patient p)
	{
	 return service.addPatient(p);
	}
}
