/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";

export default (props) =>{
    return (
        <Card style={{ width: '18rem' }} className='content-card'>
        <Card.Header className="Title">{props.title}</Card.Header>
        <Card.Body className="Content">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        // <div className='Card'>
        //     <div className="Title">{props.title}</div>
        //     <div className="Content">
        //         {props.children}
        //     </div>
        // </div>
    );
}