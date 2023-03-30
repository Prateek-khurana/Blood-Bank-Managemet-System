import React,{useState} from 'react';
import DonorService from '../Services/DonorService.js'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './DonorDetailsEntry.css'
import NavBar2 from './NavBar2'
import Footer from './Footer.js'
import {useNavigate} from 'react-router-dom'



export default function DonorDetailsEntry() {

  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [error, setError] = useState(0)
  const navigate = useNavigate();


  const saveDonorDetails = async(e) => {
    e.preventDefault();
    const donor={donorName,donorEmail}
    console.log(donor);

    DonorService.getDonorIdByNameAndEmail(donor).then(response=>{
      console.log(response.data)
      const id = response.data
      if(id && id!==-1)
      {
        setError(0)
        navigate(`/get/donor-results/${id}`);
      }
      else{
          setError(1);
          alert("Invalid credentials!!");
      }

    })
  }

  const backPage = ()=>{
    navigate("/welcome/staff",{state:"staff"});
  }


  return (
      <>
      <NavBar2></NavBar2>
      <div className="back-button-donor-check">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="parent-div-donor-details">
      <div className="login-overall-donor">
    <form  onSubmit={(e)=>saveDonorDetails(e)}>
      <MDBInput className='mb-4' required type='text' id='form2Example1' label='Name' 
      onChange = {(event)=>setDonorName(event.target.value)}/>
      <MDBInput className='mb-4' required type='email' id='form2Example1' label='Email'
      onChange = {(event)=>setDonorEmail(event.target.value)} />
      <MDBBtn type='submit' className='mb-4' block>
        GET DONOR DETAILS
      </MDBBtn>

      <div className='text-center'>
        <p>
          <u>DONOR STATUS</u>
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