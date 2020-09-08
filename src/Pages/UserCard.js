import React from "react";
import {  CardBody,Row, Col } from "reactstrap";
import "../App.css"

const UserCard = ({ user }) => {
  return (
   
    
     <CardBody className="bodyCard">
      <Row>
            <Col sm="12">
            <div>
                    <div className="text-primary text">Name : { user.name === null ? "No Name" : user.name }</div>
                    <div className="text-primary">Public_repos : { user.public_repos }</div>
                    <div className="text-primary">Public_gists : { user.public_gists }</div>
                    
                    <div className="text-info">Followers : { user.followers }</div>
                    <div className="text-info">Following : { user.following }</div>
            </div>
            </Col>
      </Row>
     </CardBody>
  
    
  );
};

export default UserCard;
