package com.bloodbank.hospital.serviceImpl;

import java.io.FileNotFoundException;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.hospital.model.donor;
import com.bloodbank.hospital.repositories.DonorRepository;
import com.bloodbank.hospital.repositories.StorageRepository;
import com.bloodbank.hospital.services.certificateGeneratorService;
import com.bloodbank.hospital.services.donorService;
import com.itextpdf.text.DocumentException;

@Service
public class donorServiceImpl implements donorService {

	@Autowired
	public DonorRepository donorrepo;
	@Autowired
	public StorageRepository srepo;

	@Autowired
	certificateGeneratorService certiService;

	@Override
	public Iterable<donor> allDonors() {

		return donorrepo.findAll();
	}

	@Override
	public Optional<donor> getDonorById(int id) {
		return donorrepo.findById(id);
	}

	@Override
	public int getIdByNameAndEmail(String name, String email) {
		return donorrepo.findIdByNameAndEmail(name, email);
	}

	@Override
	public Optional<donor> getByNameAndEmail(String name, String email) {
		return donorrepo.findByNameAndEmail(name, email);
	}

	@Transactional
	@Override
	public donor addDonorToRepo(donor d) {
		System.out.println(d.toString());
		int quantityPresent = srepo.findById(d.getDonor_blood_group()).get().getQuantity();
		int newQuantity = quantityPresent + d.getQuantity_donated();
		//updated blood quantity in blood bank
		srepo.updateData(d.getDonor_blood_group(), newQuantity);
		System.out.println(d.toString());
		try {
			donor check = donorrepo.findByNameAndEmail(d.getDonor_name(), d.getDonor_email()).get();
			System.out.println(check.toString());
		} catch (Exception e) {
			//prints if the donor is fresh
			System.out.println("Error has occoured");
		}
				
		System.out.println("Check before if codition of saving donor data");
		if (donorrepo.findByNameAndEmail(d.getDonor_name(), d.getDonor_email()).isPresent()==false) {
			System.out.println(d.toString());
			d.setDonation_date(java.time.LocalDate.now());
			donorrepo.save(d);
			System.out.println("Donor data saved in repo. Donor is new");
		} else {
			int presentDonatedUnits = 0;
			try {
				//if old donor trying to fetch quantity already donated
				donor tempDonor = donorrepo.findByNameAndEmail(d.getDonor_name(), d.getDonor_email()).get();
				presentDonatedUnits = tempDonor.getQuantity_donated();
			} catch (Exception e) {
					System.out.println("Donor is new");	
			}

			int newTotalDonatedUnits = d.getQuantity_donated() + presentDonatedUnits;
			donorrepo.updateDonorDetails(d.getDonor_name(), d.getDonor_email(), newTotalDonatedUnits);
			donorrepo.updateDate(d.getDonor_name(), d.getDonor_email(), java.time.LocalDate.now());
			d.setDonation_date(java.time.LocalDate.now());
		}

		System.out.println("Reached the end");
		try {
			System.out.println("Generating certificate");
			certiService.generatecertificate(d);
			System.out.println("Certificate Generated");
		} catch (FileNotFoundException | DocumentException e) {
			System.out.println("Error occoured while generating certificate");
			e.printStackTrace();
		}
		return d;

	}

}
