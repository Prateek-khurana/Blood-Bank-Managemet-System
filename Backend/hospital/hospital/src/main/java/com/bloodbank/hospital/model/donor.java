package com.bloodbank.hospital.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.tuple.GenerationTiming;

@Entity
@Table(name = "donor")
public class donor {
	@Id
	int donor_id;
	@Column(name = "donor_name")
	String donor_name;
	@Column(name = "donor_blood_group")
	String donor_blood_group;
	@Column(name = "donor_phone_number")
	String donor_phone_number;
	@Column(name = "donor_email")
	String donor_email;
	@Column(name = "quantity_donated")
	int quantity_donated;
	@Column(name="donation_date")
	LocalDate donation_date;

	public donor() {
		super();
	}

	public donor(String donor_name, String donor_blood_group, String donor_phone_number, String donor_email,
			int quantity_donated) {
		super();
		this.donor_name = donor_name;
		this.donor_blood_group = donor_blood_group;
		this.donor_phone_number = donor_phone_number;
		this.donor_email = donor_email;
		this.quantity_donated = quantity_donated;
	}

	public int getDonor_id() {
		return donor_id;
	}

	public String getDonor_name() {
		return donor_name;
	}

	public void setDonor_name(String donor_name) {
		this.donor_name = donor_name;
	}

	public String getDonor_blood_group() {
		return donor_blood_group;
	}

	public void setDonor_blood_group(String donor_blood_group) {
		this.donor_blood_group = donor_blood_group;
	}

	public String getDonor_phone_number() {
		return donor_phone_number;
	}

	public void setDonor_phone_number(String donor_phone_number) {
		this.donor_phone_number = donor_phone_number;
	}

	public String getDonor_email() {
		return donor_email;
	}

	public void setDonor_email(String donor_email) {
		this.donor_email = donor_email;
	}

	public int getQuantity_donated() {
		return quantity_donated;
	}

	public void setQuantity_donated(int quantity_donated) {
		this.quantity_donated = quantity_donated;
	}

	

	public void setDonor_id(int donor_id) {
		this.donor_id = donor_id;
	}

	@Override
	public String toString() {
		return "donor [donor_id=" + donor_id + ", donor_name=" + donor_name + ", donor_blood_group=" + donor_blood_group
				+ ", donor_phone_number=" + donor_phone_number + ", donor_email=" + donor_email + ", quantity_donated="
				+ quantity_donated + ", donation_date=" + donation_date + "]";
	}

	public LocalDate getDonation_date() {
		return donation_date;
	}

	public void setDonation_date(LocalDate localDate) {
		this.donation_date = localDate;
	}

	

}
