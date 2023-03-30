package com.bloodbank.hospital;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.bloodbank.hospital.model.donor;
import com.bloodbank.hospital.repositories.DonorRepository;
import com.bloodbank.hospital.repositories.StorageRepository;
import com.bloodbank.hospital.serviceImpl.donorServiceImpl;

class DonorServiceTesting {
	
	private donorServiceImpl service;
	private DonorRepository mockDonorRepo;
	private StorageRepository mockStorageRepo;
	
	@BeforeEach
	void setUp()
	{
		this.service=new donorServiceImpl();
		this.mockDonorRepo = mock(DonorRepository.class);
		this.mockStorageRepo=mock(StorageRepository.class);
		
		service.donorrepo=mockDonorRepo;
		service.srepo=mockStorageRepo;
	}

	@Test
	void testGetDonorById() throws Exception{
		donor d = new donor();
		d.setDonor_id(1);
		d.setDonor_name("Prateek");
		d.setDonor_phone_number("9306114415");
		when(mockDonorRepo.findById(1)).thenReturn(Optional.of(d));
		Optional<donor> don = service.getDonorById(1);
		String actual = don.get().getDonor_name();
		String expected = d.getDonor_name();
		assertEquals(expected,actual);
	}
	


}
