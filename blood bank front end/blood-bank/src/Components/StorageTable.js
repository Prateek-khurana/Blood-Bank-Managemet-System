import React,{useState,useEffect} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import NavBar2 from './NavBar2'
import './StorageTable.css'
import Footer from './Footer.js'
import StorageService from '../Services/StorageService.js'
import {useNavigate} from'react-router-dom'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function StorageTable() {
  const navigate = useNavigate();


const [blood, setblood] = useState([])

useEffect(() => {
  StorageService.getAllBlood().then((response)=>{
    setblood(response.data)
    console.log(response.data);
  }).catch(error=>{
    console.log(error);
  })
}, [blood])

const backPage=()=>{
  navigate("/welcome/staff",{state:"staff"});
}

  return (
      <>
      <NavBar2></NavBar2>
      <div className="back-button-storage">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="result-table-storage">
    <MDBTable >
      <MDBTableHead dark>
        <tr>
          <th scope='col'>BLOOD GROUP</th>
          <th scope='col'>QUANTITY PRESENT(in units)</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      { 
        blood.map(
          b =>
          <tr key={b.blood_group}>
          <th scope='row'><b>{b.blood_group}</b></th>
          <td>{b.quantity}</td>
        </tr>
        )
      }


      </MDBTableBody>
    </MDBTable>
    </div>
    <div className="footer-handler mt-5">
        <Footer></Footer>
    </div>

    </>
  );
}