package com.bloodbank.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hospital_staff")
public class staff {
	@Id
	int id;
	@Column(name="name")
	String name;
	@Column(name="email")
	String email;
	@Column(name="password")
	String password;
	@Column(name="blood_group")
	String blood_group;
	@Column(name="designation")
	String designation;
	@Column(name="reports_to")
	String reports_to;
	@Column(name="phone_number")
	String phone_number;
	
	public staff() {
		super();
	}
	
	
	public staff(int id, String name, String email, String password, String blood_group, String designation,
			String reports_to, String phone_number) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.blood_group = blood_group;
		this.designation = designation;
		this.reports_to = reports_to;
		this.phone_number = phone_number;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getBlood_group() {
		return blood_group;
	}


	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public String getReports_to() {
		return reports_to;
	}


	public void setReports_to(String reports_to) {
		this.reports_to = reports_to;
	}


	public String getPhone_number() {
		return phone_number;
	}


	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}


	@Override
	public String toString() {
		return "staff [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", blood_group="
				+ blood_group + ", designation=" + designation + ", reports_to=" + reports_to + ", phone_number="
				+ phone_number + "]";
	}
	
	
	
}
