package com.bloodbank.hospital.repositories;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bloodbank.hospital.model.staff;

@Repository
public interface staffRepository extends CrudRepository<staff, Integer>{
	@Query(nativeQuery=true,value="select * from hospital_staff where email=:staff_email and password=:staff_password")
	public staff findByEmailAndPassword(String staff_email,String staff_password);
	
	@Query(nativeQuery=true,value="select * from hospital_staff where email=:staff_email")
	public staff findByEmail(String staff_email);
}
