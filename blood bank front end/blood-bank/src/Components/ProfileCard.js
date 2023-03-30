import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import classes from './ProfileCard.module.css';

export default function ProfileCard(props) {
  return (
    <div className={classes.profileCard}>
    <MDBCard >
      <MDBCardImage position='top' src='./../images/me.png' className={classes.image} />
      <MDBCardBody>
        <div className={classes.title}>
        <MDBCardTitle >PRATEEK KHURANA</MDBCardTitle>
        </div>
        <MDBCardText>
         
            <li>Jr.Product Specialist</li>
            <li>ISG</li>
         
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>prateekk0299@gmail.com</MDBListGroupItem>
        <MDBListGroupItem>9306114415</MDBListGroupItem>
        <MDBListGroupItem>SEZ-NOIDA</MDBListGroupItem>
      </MDBListGroup>
     
    </MDBCard>
    </div>
  );
}