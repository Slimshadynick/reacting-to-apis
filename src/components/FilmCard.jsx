import React from "react";
import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class FilmCard extends Component {
  render() {
    return (
      <Card style={{ width: "30%" }} bg="light">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FilmCard;
