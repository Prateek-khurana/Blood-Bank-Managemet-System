import React,{useState} from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Login.css'
import NavBar from './NavBar'
import Footer from './Footer.js'
import LoginService from '../Services/LoginService'
import {useNavigate} from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(0)
  const navigate = useNavigate();

  const backPage= ()=>{
    navigate("/welcome");
  }

  const saveLoginDetails = async(e) => {
    e.preventDefault();
    const staffMember={email,password}
    console.log(staffMember);

    LoginService.getByUsernameAndPassword(staffMember).then(response=>{
      console.log(response.data)
      const resp = response.data
      localStorage.setItem('email',resp.email);
      if(resp!="")
      {
        setError(0)
        navigate(`/welcome/staff`,{state:"staff"})
      }
      else{
          setError(1)
          alert("Invalid Credentials !!")
          
      }
    })
  }


  return (
      <>
      <NavBar></NavBar>
      <div className="back-button-login">
        <MDBIcon fas icon="arrow-circle-left fa-3x" onClick={backPage} />
      </div>
      <div className="parent-login-div">
      <div className="login-overall-loginpage">
     <form onSubmit={(e)=>saveLoginDetails(e)}>
      <MDBInput className='mb-4' required type='email' id='form2Example1' label='Email address' 
      onChange = {(event)=>setEmail(event.target.value)}/>

      <MDBInput className='mb-4' required type='password' id='form2Example2' label='Password' 
      onChange = {(event)=>setPassword(event.target.value)}/>

      <MDBBtn type='submit' className='mb-4' block>
        LOG IN
      </MDBBtn>
      <div className='text-center'>
        <p>
          <u>Hospital Staff Login</u>
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