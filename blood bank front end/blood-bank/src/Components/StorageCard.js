import Button from "react-bootstrap/Button";
import "./Welcome.css";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import './CheckDetailCards.css';

function StorageCard() {
  return (
    <div className="card-overall">
    <Card style={{ width: "auto" }}>
      <Card.Img variant="top" src="./../images/storageCard2.jpg" />

      <Card.Body className="welcome-cards-align">
        <Card.Title>
          STORAGE
        </Card.Title>

        <Card.Text>
         To check overall storage in the bank.
        </Card.Text>

        <Button variant="primary" href="/storage">
          CHECK STORAGE
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default StorageCard;
