import React, { useEffect, useState } from "react";
import NavBar2 from "./NavBar2";
import "./StaffProfile.css";
import StaffProfilePatientCard from "./StaffProfilePatientCard.js";
import StaffProfileDonorCard from "./StaffProfileDonorCard.js";
import Footer from "./Footer.js";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoginService from "../Services/LoginService";

export default function StaffProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const staffMember = 1;

  console.log(staffMember);

  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    if (location.state !== "staff") {
      navigate(`/login`);
    }
  }, []);

  useEffect(() => {
    LoginService.getByEmail(localStorage.getItem("email"))
      .then((response) => {
        setStaffData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar2></NavBar2>
      <div className="staff-data">
        <div class="info-div">
          <div className="staff-name">
            <h5>
              <b>
                <u>NAME </u>
              </b>
              :&nbsp;&nbsp;&nbsp;&nbsp; {staffData?.name}{" "}
            </h5>

            <br></br>
            <h5>
              <b>
                <u>DESIGNATION </u>
              </b>
              :&nbsp;&nbsp; {staffData?.designation}{" "}
            </h5>
            <br></br>
          </div>

          <div className="staff-reporting">
            <h5>
              <b>
                <u>BLOOD GROUP </u>
              </b>
              :&nbsp;&nbsp; {staffData?.blood_group}{" "}
            </h5>
            <br></br>
            <h5>
              <b>
                <u>REPORTS TO </u>
              </b>
              :&nbsp;&nbsp; {staffData?.reports_to}
            </h5>
          </div>
        </div>
        <div className="image-div">
          <img src="../images/me.png" alt="" className="my-image" />
        </div>
      </div>

      <div className="staff-cards">
        <StaffProfilePatientCard></StaffProfilePatientCard>
        <StaffProfileDonorCard></StaffProfileDonorCard>
      </div>

      <div class="footer-handler">
        <Footer></Footer>
      </div>
    </div>
  );
}
