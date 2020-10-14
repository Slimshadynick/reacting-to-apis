import React from "react";
import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Person extends Component {
  render() {
    return (
      <Card style={{ width: "30%" }} bg="light">
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{`${this.props.name} is ${this.props.age} ${this.props.gender} with ${this.props.hair} hair and ${this.props.eyes} eyes.`}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Person;