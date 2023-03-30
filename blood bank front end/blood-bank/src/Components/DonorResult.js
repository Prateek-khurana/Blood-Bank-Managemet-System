import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import NavBar2 from './NavBar2'
import './DonorResult.css'
import Footer from './Footer.js'
import { useParams } from 'react-router-dom';
import DonorService from '../Services/DonorService'
import { MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function DonorResult() {

  const [donorData, setDonorData] = useState([])
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    DonorService.getDonorById(id).then((response) => {
      setDonorData(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const backPage=()=>{
    navigate("/get/donor-details");
  }
  



  return (
    <>
      <NavBar2></NavBar2>
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
              <th scope='col'>QUANTITY DONATED TILL DATE</th>
            </tr>
            <tr>
              <th scope='col'>LAST DONATED ON</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody className="table-b">
            <tr>
              <td>{donorData?.donor_id}</td>
            </tr>
            <tr>
              <td>{donorData?.donor_name}</td>
            </tr>
            <tr>
              <td>{donorData?.donor_email}</td>
            </tr>
            <tr>
              <td>{donorData?.donor_blood_group}</td>
            </tr>
            <tr>
              <td>{donorData?.quantity_donated}</td>
            </tr>
            <tr>
              <td>{donorData?.donation_date}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
      <div className="footer-handler mt-5 mb-0">
        <Footer></Footer>
      </div>

    </>
  );
}