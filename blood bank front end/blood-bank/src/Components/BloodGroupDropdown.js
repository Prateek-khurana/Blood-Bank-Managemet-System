import React, { useState } from "react";
import "./BloodGroupDropdown.css";

export default function BloodGroupDropdown(props) {
  const [bloodGroup, setbloodGroup] = useState("");
  const bloodGroupChangeHandler = (event) => {
    setbloodGroup(event.target.value);
    console.log(event.target.value);
    props.onFetchingGroup(event.target.value);
  };

  return (
    <div className="select-parent-div">
    <select required className="drop-down" defaultValue="Blood Group" onChange={bloodGroupChangeHandler}>
        <option value="Blood Group" disabled><b>Blood Group</b></option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
    </select>
    </div>
  );
}
