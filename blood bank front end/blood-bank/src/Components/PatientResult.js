import React,{useState,useEffect} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import NavBar from './NavBar'
import './PatientResult.css'
import Footer from './Footer.js'
import {useParams} from 'react-router-dom';
import PatientService from '../Services/PatientService.js'
import {
  MDBIcon
} from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router-dom'


export default function PatientResult() {

 const navigate  = useNavigate();

   const backPage = ()=>{
     navigate("/get/patient-details");
   }
  const [patientData, setPatientData] = useState([])

  const params = useParams();
  const id = params.id;


  useEffect(() => {
    PatientService.getPatientById(id).then((response)=>{
      setPatientData(response.data)
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }, [])
  

  return (
      <>
      <NavBar></NavBar>
      <div className="back-button">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="result-table-donor">
      

        <MDBTable className="table-body">
          <MDBTableHead className="table-head">
            <tr>
              <th scope='col'>ID</th>
            </tr>
            <tr>
              <th scope='col'>NAME</th>
            </tr>
            <tr>
              <th scope='col'>EMAIL</th>
            </tr>
            <tr>
              <th scope='col'>BLOOD GROUP</th>
            </tr>
            <tr>
              <th scope='col'>QUANTITY REVEIVED TILL DATE</th>
            </tr>
            <tr>
            <th scope='col'>PHONE NUMBER</th>
            </tr>
            <tr>
            <th scope='col'>ADDRESS</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody className="table-b">
            <tr>
            <td scope='row'>{patientData?.patient_id}</td>
            </tr>
            <tr>
              <td>{patientData?.patient_name}</td>
            </tr>
            <tr>
            <td>{patientData?.email}</td>
            </tr>
            <tr>
            <td>{patientData?.blood_group}</td>
            </tr>
            <tr>
            <td>{patientData?.quantity_required}</td>
            </tr>
            <tr>
            <td>{patientData?.phonenumber}</td>
            </tr>
            <tr>
            <td>{patientData?.address}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    <div className="footer-handler mt-5">
        <Footer></Footer>
    </div>
    </>
  );
}