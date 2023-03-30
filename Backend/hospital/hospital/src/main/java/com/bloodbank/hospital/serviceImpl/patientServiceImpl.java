package com.bloodbank.hospital.serviceImpl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.patient;
import com.bloodbank.hospital.repositories.PatientRepository;
import com.bloodbank.hospital.repositories.StorageRepository;
import com.bloodbank.hospital.services.patientService;
import com.bloodbank.hospital.services.smsService;

@Service
public class patientServiceImpl implements patientService {

	@Autowired
	private PatientRepository patientrepo;

	@Autowired
	private StorageRepository storageRepo;
	
	@Autowired
	private smsService messageService;

	@Override
	public Iterable<patient> allPatients() {
		return patientrepo.findAll();
	}

	@Override
	public Optional<patient> getPatientById(int id) {
		return patientrepo.findById(id);
	}

	@Override
	public Optional<patient> getByNameAndEmail(String name, String patient_email) {
		return patientrepo.findByNameAndEmail(name, patient_email);
	}

	@Transactional
	@Override
	public patient addPatient(patient p) {
		int presentQuantityInStorage = 0;
		try {
			 presentQuantityInStorage = storageRepo.findById(p.getBlood_group()).get().getQuantity();
			 System.out.println("Quantity in blood group fetched");
			 System.out.println(presentQuantityInStorage);
			 System.out.println(p.getQuantity_required());
		}
		catch (Exception e) {
			System.out.println("Error in fetching quantity from storage");
		}
		System.out.println("exitted from fetching try catch");
		int updatedQuantityToBeStored = presentQuantityInStorage - p.getQuantity_required();
		System.out.println(updatedQuantityToBeStored);
		if (updatedQuantityToBeStored > 0) {
			
			if (patientrepo.findByNameAndEmail(p.getPatient_name(), p.getEmail()).isPresent()==false) {
			
				patientrepo.save(p);
			}
			else {
				
				int quantityAlreadyProvided = 0;
				try {
					quantityAlreadyProvided=patientrepo.findByNameAndEmail(p.getPatient_name(), p.getEmail()).get()
					.getQuantity_required();
				}
				catch (Exception e) {
					
				}
		
				int totalQuantityAsked = p.getQuantity_required() + quantityAlreadyProvided;
				patientrepo.updatePatientQuantity(p.getPatient_name(),p.getEmail(),totalQuantityAsked);
				
				
				
			}
			
			storageRepo.updateData(p.getBlood_group(), updatedQuantityToBeStored);
			
		} else {
			System.out.println("Quanity present is insufficient .Cannot register patient");
			List<String> numberList = messageService.getDonorNumbers(p.getBlood_group());
			String number = "";
			System.out.println("Number is :"+numberList);
			String message = "Hello donor, we are very greatful for your donations so far but we at the blood bank are running short of "
					+" "+p.getBlood_group()+" since you are eligible to donate blood again we request you to step up for this noble cause and save some more "
							+ " lives. Regards- Prateek's Blood Bank.";
			
			for(String num : numberList)
			{
				 number += num+",";
			}
			System.out.println(number);
			p.setPhonenumber(number);
			p.setAddress(message);
		}
		return p;
	}

	@Override
	public int findIdByNameAndEmail(String name, String email) {
		return patientrepo.findIdByNameAndEmail(name, email);
	}
	

}
