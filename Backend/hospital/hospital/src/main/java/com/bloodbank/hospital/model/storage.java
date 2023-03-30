package com.bloodbank.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "storage")
public class storage {
	

	@Id
	@Column(name = "blood_group")
	String blood_group;
	@Column(name = "quantity")
	int quantity;

	public storage(String blood_group, int quantity) {
		super();
		this.blood_group = blood_group;
		this.quantity = quantity;
	}

	public storage() {
		super();
	}


	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "storage [blood_group=" + blood_group + ", quantity=" + quantity + "]";
	}

}