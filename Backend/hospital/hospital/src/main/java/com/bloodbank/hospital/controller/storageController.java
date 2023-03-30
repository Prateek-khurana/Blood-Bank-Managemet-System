package com.bloodbank.hospital.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.hospital.model.storage;
import com.bloodbank.hospital.services.storageService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin("*")
public class storageController {
	@Autowired
	private storageService service;
	
	@GetMapping("/blood")
	public Iterable<storage> getAllBloodGroups()
	{
		return service.getAllGroups();
	}
	
	@GetMapping("/blood/{bloodGroup}")
	public Optional<storage> getByBloodGroup(@PathVariable String bloodGroup)
	{
		return service.getBloodByBloodGroup(bloodGroup);
	}
}
