import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login.js';
import Welcome from './Components/Welcome.js'
import NavBar from './Components/NavBar.js'
import DonorDetailsEntry from './Components/DonorDetailsEntry.js'
import PatientDetailsEntry from './Components/PatientDetailsEntry.js'
import DonorResult from './Components/DonorResult.js'
import PatientResult from './Components/PatientResult.js'
import StorageTable from './Components/StorageTable.js'
import RegisterDonor from './Components/RegisterDonor.js'
import RegisterPatient from './Components/RegisterPatient.js'
import StaffProfile from './Components/StaffProfile.js'
import StaffProfile2 from './Components/StaffProfile2';



import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
     <div className="App">
     

       <Routes>
       {/* Welcome Page */}

       <Route exact path="/welcome" element={<Welcome/>}></Route>
  

       {/* login page */}
       {/* <Login></Login>  */}
     <Route exact path="/login" element={<Login/>}></Route>

       {/* //donorDetailsEnter */}
       {/* <DonorDetailsEntry></DonorDetailsEntry>  */}
       <Route exact path="/get/donor-details" element={<DonorDetailsEntry/>}></Route>

       {/* patientDetailsEnter */}
       {/* <PatientDetailsEntry></PatientDetailsEntry> */}
      <Route exact path="/get/patient-details" element={<PatientDetailsEntry/>}></Route>

      {/* donorResults */}
       {/* <DonorResult></DonorResult> */}
       <Route exact path="/get/donor-results/:id" element={<DonorResult/>}></Route>
      
       {/* patientResults */}
       {/* <PatientResult></PatientResult> */}
       <Route exact path="/get/patient-result/:id" element={<PatientResult/>}></Route>

       {/* storageTable */}
       {/* <StorageTable></StorageTable> */}
       <Route exact path="/storage" element={<StorageTable/>}></Route>

       {/* Registerdonor */}
       {/* <RegisterDonor></RegisterDonor> */}
       <Route exact path="/register-donor" element={<RegisterDonor/>}></Route>

       {/* RegisterPatient */}
       {/* <RegisterPatient></RegisterPatient> */}
       <Route exact path="/register-patient" element={<RegisterPatient/>}></Route>

     {/* Staff Profile */}
      <Route exact path="/welcome/staff" element={<StaffProfile2></StaffProfile2>}></Route>
      </Routes>
        </div>
      </Router>
  );
}

export default App;
