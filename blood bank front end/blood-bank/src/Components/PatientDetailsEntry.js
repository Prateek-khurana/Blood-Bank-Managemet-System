import React,{useState} from 'react';
import axios from 'axios';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './PatientDetailsEntry.css'
import NavBar from './NavBar'
import Footer from './Footer.js'
import PatientService from '../Services/PatientService.js'
import {useNavigate} from 'react-router-dom'
import InvalidAlert from'./InvalidAlert.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar2 from './NavBar2';




export default function PatientDetailsEntry() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(0)
  const navigate = useNavigate();



  const backPage = ()=>{
    navigate("/welcome/staff",{state:"staff"});
  }


  const savePatientDetails = async(e) => {
    e.preventDefault();
    const patient={name,email}
    console.log(patient);
    //------------------------------
    // axios call to check if patient exist or not
    PatientService.getPatientIdByNameAndEmail(patient).then(response=>{
      console.log(response.data)
      const id = response.data
      console.log(id)
    
      if(id && id!==-1)
    {
      setError(0)
      navigate(`/get/patient-result/${id}`)
    }
    else{
        setError(1);
        alert("Invalid credentials !!");
    }

  })

   
   
  }

  return (
      <>
      <NavBar2></NavBar2>
      <div className="back-button-patient-check">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="parent-patient-details-entry">
      <div className="login-overall">
      
    <form onSubmit={(e)=>savePatientDetails(e)}>
     
      <MDBInput className='mb-4' type='text' required id='form2Example1' label='Name' value={name} 
      onChange = {(event)=>setName(event.target.value)}/>
      <MDBInput className='mb-4' type='text' required id='form2Example1' label='Email' value={email}
      onChange = {(event)=>setEmail(event.target.value)}/>

      <MDBBtn type='submit' className='mb-4' block >
        GET PATIENT DETAILS
      </MDBBtn>
      <div className='text-center'>
        <p>
          <u>PATIENT STATUS</u>
        </p>
      </div>
     
    </form>
    </div>
     </div> 
    <div className="footer-handler mt-5">
        <Footer></Footer>
    </div>
    </>
  );
}