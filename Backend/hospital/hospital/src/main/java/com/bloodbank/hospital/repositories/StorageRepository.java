package com.bloodbank.hospital.repositories;



import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.bloodbank.hospital.model.storage;
@Repository
public interface StorageRepository extends CrudRepository<storage, String>{
	@Modifying
	@Query(nativeQuery=true,value="update storage SET quantity =:newQuantity WHERE blood_group=:bloodGroup")
	public void updateData(String bloodGroup,int newQuantity);
}
