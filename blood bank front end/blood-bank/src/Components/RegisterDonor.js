import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Login.css";
import NavBar2 from "./NavBar2";
import Footer from "./Footer.js";
import "./RegisterDonor.css";
import { useLocation, useNavigate } from "react-router-dom";
import DonorService from "../Services/DonorService";
import BloodGroupDropdown from "./BloodGroupDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterDonor() {
  const location = useLocation();
  const navigate = useNavigate();

  const [donor_name, setName] = useState("");
  const [donor_blood_group, setBloodGroup] = useState("");
  const [donor_phone_number, setPhoneNumber] = useState("");
  const [donor_email, setEmail] = useState("");
  const [quantity_donated, setQuantity] = useState("");
  const [error, setError] = useState(-1);

  useEffect(() => {
    if (location.state !== "staff") {
      navigate(`/login`);
    }
  }, []);

  
  const registerDonor = async (e) => {
    const id = toast.loading("Registering Donor...please wait!!")
    e.preventDefault();
    const donor = {
      donor_name,
      donor_blood_group,
      donor_phone_number,
      donor_email,
      quantity_donated,
    };
    console.log(donor);
    
    DonorService.adddonor(donor)
      .then((response) => {

        setTimeout(() => {
          setError(0);
          toast.update(id, { render: "Donor Registered Successfully.", type: "success", isLoading: false, autoClose:2000,onClose:()=>{
            navigate(`/welcome/staff`, { state: "staff" });
          }});
        }, 1000);
        
        // alert("Donor Registered Successfully !!");
        // console.log(response.data);
        // navigate(`/welcome/staff`, { state: "staff" });
      })
      .catch((error) => {
        setError(1);
        console.log(error);
      });
  };

  const backPage = () => {
    navigate("/welcome/staff", { state: "staff" });
  };

  const dropdownFetchHandler=(bloodg)=>{
    setBloodGroup(bloodg);
  }
  

  return (
    <>
      <NavBar2></NavBar2>

      <div className="back-button-patient-check">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>

      <div className="register-donor-parent">
        <div className="login-overall-register-donor">
          <p className="mb-4">*All the fields are mendatory.</p>
          <form onSubmit={(e) => registerDonor(e)} id="form-submit">
            <MDBInput
              className="mb-4"
              required
              type="text"
              id="form2Example1"
              label="Name"
              onChange={(event) => setName(event.target.value)}
            />
            
            <BloodGroupDropdown onFetchingGroup={dropdownFetchHandler}></BloodGroupDropdown>

            <MDBInput
              className="mb-4"
              required
              type="number"
              id="form2Example2"
              label="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <MDBInput
              className="mb-4"
              required
              type="email"
              id="form2Example2"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <MDBInput
              className="mb-4"
              required
              type="number"
              id="form2Example2"
              label="Quantity Donated"
              onChange={(event) => setQuantity(event.target.value)}
            />

            <MDBBtn type="submit" className="mb-4" block>
              SUBMIT
            </MDBBtn>

            <div className="text-center">
              <p>
                <u>DONOR REGISTRATION</u>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-handler mt-5">
        <Footer></Footer>
      </div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        autoClose={1000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
