package com.bloodbank.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class patient {
	@Id
	int patient_id;

	@Column(name = "patient_name")
	String patient_name;

	@Column(name = "email")
	String email;
	@Column(name = "Phonenumber")
	String Phonenumber;
	@Column(name = "Address")
	String Address;
	@Column(name = "blood_group")
	String blood_group;
	@Column(name = "quantity_provided")
	int quantity_required;

	public patient() {
		super();
	}

	



	public patient(String patient_name, String email, String phonenumber, String address, String blood_group,
			int quantity_required) {
		super();
		this.patient_name = patient_name;
		this.email = email;
		Phonenumber = phonenumber;
		Address = address;
		this.blood_group = blood_group;
		this.quantity_required = quantity_required;
	}





	@Override
	public String toString() {
		return "patient [patient_id=" + patient_id + ", patient_name=" + patient_name + ", email=" + email
				+ ", Phonenumber=" + Phonenumber + ", Address=" + Address + ", blood_group=" + blood_group
				+ ", quantity_required=" + quantity_required + ", getPatient_id()=" + getPatient_id()
				+ ", getPatient_name()=" + getPatient_name() + ", getEmail()=" + getEmail() + ", getPhonenumber()="
				+ getPhonenumber() + ", getAddress()=" + getAddress() + ", getBlood_group()=" + getBlood_group()
				+ ", getQuantity_required()=" + getQuantity_required() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}





	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	public String getPatient_name() {
		return patient_name;
	}

	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhonenumber() {
		return Phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		Phonenumber = phonenumber;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}



	public int getQuantity_required() {
		return quantity_required;
	}



	public void setQuantity_required(int quantity_required) {
		this.quantity_required = quantity_required;
	}

}
