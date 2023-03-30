import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './StaffProfile.css'
import {useLocation,useNavigate} from 'react-router-dom';
import './RegisterCards.css'

function StaffProfilePatientCard() {

  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  return (
    <div className='register-card-overall'>
    <Card style={{ width: 'auto',height:"345px"}}>
      <Card.Img variant="top" src="../images/bloodDonor.jpg" style={{height:"200px"}} />
      <Card.Body className="card-handler-staff">
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary" className="card-handler" onClick={()=>{
          navigate ( "/register-donor",{state:location.state})
        }}  >REGISTER DONOR</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default StaffProfilePatientCard;