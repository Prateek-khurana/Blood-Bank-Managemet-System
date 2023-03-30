import React from "react";
import classes from "./AvailabilityPopup.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import BloodGroupDropdown from "./BloodGroupDropdown";
import { useState } from "react";
import StorageService from "../Services/StorageService";

export default function AvailabilityPopup(props) {
  const [bloodGroupPopupFetch, setbloodGroupPopupFetch] = useState(null);
  const [fetchedDataFromBackend, setfetchedDataFromBackend] = useState(false);
  const [quantityFetched, setquantityFetched] = useState();

  const bloodGroupFetcher = (group) => {
    console.log("inside bloodGroup fetcher in popoup");
    setbloodGroupPopupFetch(group);
    props.onCheckClick(group);
  };

  const checkClickHandler = () => {
    console.log("Check has been clicked");
    if (bloodGroupPopupFetch === null) {
      alert("Please select blood group");
    }
    else{
      StorageService.getBloodByBloodGroup(bloodGroupPopupFetch).then(
        (response) => {
          console.log(response.data);
          console.log(response.data.quantity);
          setquantityFetched(response.data.quantity);
        }
      );
       
    setfetchedDataFromBackend(true);
    }
   
  };

  const backClickHandler=()=>{
    setfetchedDataFromBackend(false);
  }

  
  return (
    <Fragment>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        {!fetchedDataFromBackend && (
          <>
            <div className={classes.content}>
              <p>{props.message}</p>
            </div>
            <div className={classes.dropdown}>
              <BloodGroupDropdown
                onFetchingGroup={bloodGroupFetcher}
              ></BloodGroupDropdown>
            </div>
            <footer className={classes.actions}>
              <Button onClick={checkClickHandler}>CHECK</Button>
              <div>&nbsp;&nbsp;</div>
              <Button onClick={props.onCancel}>CANCEL</Button>
            </footer>
          </>
        )}
        {fetchedDataFromBackend && (
          <>
            <div className={classes.content}>
              <p>Available quantity is:&nbsp; <b>{quantityFetched}</b></p>
            </div>
            <footer className={classes.actions}>
              <Button onClick={props.onCancel}>OK</Button>
              <div>&nbsp;&nbsp;</div>
              <Button onClick={backClickHandler}>BACK</Button>
            </footer>
          </>
        )}
      </Card>
    </Fragment>
  );
}
