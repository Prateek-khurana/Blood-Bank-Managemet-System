import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBIcon} from 'mdbreact';
import {useNavigate} from 'react-router-dom';

function NavBar2() {
  const navigate = useNavigate();

  const profileClickHandler = ()=>{
      navigate('/welcome/staff',{state:"staff"});
  }

  const bloodBankCickHandler=()=>{
    navigate('/welcome',{state:"staff"})
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <MDBIcon far icon="heart" className="m-2"/>
        <Navbar.Brand onClick={bloodBankCickHandler} style={{cursor:'pointer'}}>BLOOD-BANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={profileClickHandler}>PROFILE</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar2;