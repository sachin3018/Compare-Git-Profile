import React from "react";
import {  CardBody,Row, Col } from "reactstrap";
import "../App.css"

const UserCard = ({ user }) => {
  return (
   
    
     <CardBody className="bodyCard">
      <Row>
            <Col sm="6">
                    <img src={user.avatar_url} alt="new" />
            </Col>
            <Col sm="6">
            <div>
                    <div className="text">Name : { user.name === null ? "No Name" : user.name }</div>
                    <div className="text">Public_repos : { user.public_repos }</div>
                    <div className="text">Public_gists : { user.public_gists }</div>
                    
                    <div className="text">Followers : { user.followers }</div>
                    <div className="text">Following : { user.following }</div>
            </div>
            </Col>
      </Row>
     </CardBody>
  
    
  );
};

export default UserCard;
