import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Movie.css";
const Movie = ({ name, url, description }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
