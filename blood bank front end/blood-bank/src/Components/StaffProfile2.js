import React from "react";
import DonorCard from "./DonorCard";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import PatientCard from "./PatientCard";
import ProfileCard from "./ProfileCard";
import classes from "./StaffProfile2.module.css";
import StaffProfilePatientCard from "./StaffProfilePatientCard";
import StorageCard from "./StorageCard";
import StaffProfileDonorCard from "./StaffProfileDonorCard";

export default function StaffProfile2() {
  return (
    <div>
      <NavBar2></NavBar2>
      <div className={classes.header}>
        <h1>Blood Bank : </h1>
        <div className={classes.headerListContainer}>
          <div style={{width:"30%"}}>
            <ul className={classes.list}>
              <li>Donor Registeration</li>
              <li>Patient Registeration</li>
              <li>Check Storage</li>
            </ul>
          </div>
          <div style={{width:'30%'}}>
            <ul className={classes.list}>
              <li>Check donor details</li>
              <li>Check patient details</li>
            </ul>
          </div>
        </div>
        <ProfileCard></ProfileCard>
      </div>

      <div className={classes.registerCards}>
        <div style={{width:"24%"}}>
        <StaffProfilePatientCard></StaffProfilePatientCard>
        </div>
        <div style={{width:"23%"}}>
        <StaffProfileDonorCard></StaffProfileDonorCard>
        </div>
      </div>

      <div className={classes.checkDetailsCards}>
        <div className={classes.cards}>
          <DonorCard></DonorCard>
        </div>
        <div className={classes.cards}>
          <PatientCard></PatientCard>
        </div>
        <div className={classes.cards}>
          <StorageCard></StorageCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
