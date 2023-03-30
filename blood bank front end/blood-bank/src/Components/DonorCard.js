import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Welcome.css'
function DonorCard() {
  return (
    <div className="card-overall"> 
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src="./../images/donorCard.jpg" />
      <Card.Body className="welcome-cards-align">
        <Card.Title>DONOR</Card.Title>
        <Card.Text>
         Are you a donor? Check your overall details here.
        </Card.Text>
        <Button variant="primary" href="/get/donor-details">DONOR DETAILS</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
export default DonorCard;