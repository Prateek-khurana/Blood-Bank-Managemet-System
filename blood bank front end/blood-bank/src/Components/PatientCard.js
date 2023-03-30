import Button from 'react-bootstrap/Button';
import './Welcome.css'
import Card from 'react-bootstrap/Card';
import './CheckDetailCards.css'

function PatientCard() {
  return (
    <div className='card-overall'>
    <Card style={{ width: 'auto'}}>
      <Card.Img variant="top" src="./../images/patientCard.jpg" />
      <Card.Body className="welcome-cards-align">
        <Card.Title>PATIENT</Card.Title>
        <Card.Text >
        Are you a Patient? Check your overall details here.
        </Card.Text>
        <Button variant="primary" href="/get/patient-details">PATIENT DETAILS</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
export default PatientCard;