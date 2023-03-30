package com.bloodbank.hospital.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bloodbank.hospital.model.patient;
@Repository
public interface PatientRepository extends CrudRepository<patient,Integer>{
	@Query(nativeQuery=true,value="select * from patient where patient_name=:name and email=:patient_email")
	public Optional<patient> findByNameAndEmail(String name,String patient_email);
	
	@Query(nativeQuery=true,value="select patient_id from patient where patient_name=:name and email=:patient_email")
	public int findIdByNameAndEmail(String name,String patient_email);
	
	@Modifying
	@Query(nativeQuery=true,value="update patient SET quantity_provided=:totalQuantityAsked WHERE patient_name=:name and email=:patient_email")
	public int updatePatientQuantity(String name,String patient_email,int totalQuantityAsked);
	
	
}
