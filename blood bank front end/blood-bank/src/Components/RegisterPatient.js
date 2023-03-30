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
import "./RegisterPatient.css";
import { useLocation, useNavigate } from "react-router-dom";
import PatientService from "../Services/PatientService";
import BloodGroupDropdown from "./BloodGroupDropdown";
import { Dropdown } from "bootstrap";
import AvailabilityPopup from "./AvailabilityPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPatient() {
  const location = useLocation();
  const navigate = useNavigate();

  const [patient_name, setName] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [quantity_required, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(-1);
  const [availability, setavailability] = useState();
  const [bloodGroupPopupInput, setbloodGroupPopupInput] = useState();


  const regesterPatient = async (e) => {
    e.preventDefault();
    const patient = {
      patient_name,
      blood_group,
      phonenumber,
      email,
      quantity_required,
      address,
    };
    console.log(patient);
    const id = toast.loading("Registering Patient...please wait!!")
    //do something else
    
    PatientService.addPatient(patient).then((response) => {
      console.log(response.data);
      
      const num = response.data.phonenumber;
      const message = response.data.address;
      const region = "+91";
      console.log(region);
      const numberArray = num.split(",");
      const Phone = { phonenumber };
      console.log(Phone.phonenumber);
      console.log(num);
      setTimeout(() => {
        if (num === Phone.phonenumber) {
          setError(0);
          toast.update(id, { render: "Parient Registered Successfully.", type: "success", isLoading: false, autoClose:2000,onClose:()=>{
            navigate(`/welcome/staff`, { state: "staff" });
          }});
          
        } else {
          setError(1);
          toast.update(id, { render: "Could not register patient! Please check quantity present.", type: "error", isLoading: false,autoClose:2000,onClose:()=>{
            navigate(`/welcome/staff`, { state: "staff" });
          } });
          
        }
      }, 1000);
     

      if (num !== Phone.phonenumber) {
        for (let i = 0; i < numberArray.length; i++) {
          const number = numberArray[i];
          const to = region.concat(number);
          console.log(to);
          const sms = { to, message };

          PatientService.sendSms(sms)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    });
  };

  const popupCancelHandler = () => {
    setavailability();
  };

  const backPage = () => {
    navigate("/welcome/staff", { state: "staff" });
  };

  const availabilityClickHandler = () => {
    setavailability({ title: "STORAGE", message: "Please select blood group" });
    console.log(availability);
  };

  const bloodGroupFetchHandler = (bg) => {
    setBloodGroup(bg);
    console.log("inside bloodGroupFetch Handler");
  };

  const popupClickCheckHandler = (b_g) => {
    console.log("inside popupClickCheckHandler");
    setbloodGroupPopupInput(b_g);
    console.log(b_g);
    console.log(bloodGroupPopupInput);
  };

  useEffect(() => {
    if (location.state !== "staff") {
      navigate(`/login`);
    }
  }, []);

  return (
    <>
      <NavBar2></NavBar2>
      {availability && (
        <AvailabilityPopup
          title={availability.title}
          message={availability.message}
          onCancel={popupCancelHandler}
          onCheckClick={popupClickCheckHandler}
        ></AvailabilityPopup>
      )}
      <div className="back-button-patient-check">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="register-patient-parent">
        <div className="availability-button">
          <MDBBtn
            type="submit"
            className="availability-button"
            block
            onClick={availabilityClickHandler}
          >
            Ckeck Availability
          </MDBBtn>
        </div>

        <div className="login-overall-register-patient">
          <p className="mb-4">*All the fields are mendatory.</p>
          <form onSubmit={(e) => regesterPatient(e)}>
            <MDBInput
              className="mb-4"
              required
              type="text"
              id="form2Example1"
              label="Name"
              onChange={(event) => setName(event.target.value)}
            />

            <BloodGroupDropdown
              onFetchingGroup={bloodGroupFetchHandler}
            ></BloodGroupDropdown>

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
              label="Quantity"
              onChange={(event) => setQuantity(event.target.value)}
            />
            <MDBInput
              className="mb-4"
              required
              type="address"
              id="form2Example2"
              label="ADDRESS"
              onChange={(event) => setAddress(event.target.value)}
            />

            <MDBBtn type="submit" className="mb-4" block>
              SUBMIT
            </MDBBtn>

            <div className="text-center"></div>
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
