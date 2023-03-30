import React from 'react'
import DonorCard from './DonorCard'
import NavBar from './NavBar'
import PatientCard from './PatientCard'
import StorageCard from './StorageCard'
import Footer from './Footer'
import SlidingImages from './SlidingImages'
import './Welcome.css'
import NavBar2 from './NavBar2'
export default function welcome() {
  return (
    <div>
      {
        {state:"staff"}?<NavBar2></NavBar2>:<NavBar></NavBar>
      }
   
       
        <div className='image-handler'>
            <SlidingImages></SlidingImages>
        </div>
        {/* <div className='card-handler'>
            <PatientCard></PatientCard>
            <DonorCard ></DonorCard>
            <StorageCard ></StorageCard>
        </div> */}
        <div className='footer-handler'>
          <Footer></Footer>
        </div>
    </div>
  )
}