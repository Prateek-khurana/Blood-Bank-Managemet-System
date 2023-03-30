package com.bloodbank.hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.hospital.model.staff;
import com.bloodbank.hospital.services.loginService;

@RestController
@CrossOrigin("*")
@RequestMapping("/hospital")
public class loginController {
	
	@Autowired 
	private loginService service;
	
	
	@GetMapping("/staff/login/{email}/{password}")
	public staff loginPage(@PathVariable String email,@PathVariable String password)
	{
		 return service.findByEmailAndPassword(email,password);
	}
	
	@GetMapping("/staff/login/{email}")
	public staff getStaffByEmail(@PathVariable String email)
	{
		return service.findStaffByEmail(email);
	}
	

}
