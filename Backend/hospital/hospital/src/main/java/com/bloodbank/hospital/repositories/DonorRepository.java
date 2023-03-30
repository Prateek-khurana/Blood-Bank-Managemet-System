package com.bloodbank.hospital.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.bloodbank.hospital.model.donor;

@Repository
public interface DonorRepository extends CrudRepository<donor, Integer>{
	@Query(nativeQuery=true,value="select * from donor where donor_name=:name and donor_email=:email")
	public Optional<donor> findByNameAndEmail(String name,String email);
	
	@Query(nativeQuery=true,value="select donor_id from donor where donor_name=:name and donor_email=:email")
	public int findIdByNameAndEmail(String name,String email);
	
	@Query(nativeQuery=true,value="select * from donor where donor_blood_group=:blood_group")
	 public List<donor> findByBloodGroup(String blood_group);
	
	@Modifying
	@Query(nativeQuery=true,value="update donor SET quantity_donated =:updatedQuantity WHERE donor_name=:name and donor_email=:email")
	public int updateDonorDetails(String name,String email,int updatedQuantity);
	
	@Modifying
	@Query(nativeQuery=true,value="update donor SET donation_date =:latestDonationDate WHERE donor_name=:name and donor_email=:email")
	public int updateDate(String name,String email,LocalDate latestDonationDate);
}
