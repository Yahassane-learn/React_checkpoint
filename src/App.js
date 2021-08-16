import React, { Component } from 'react' ;
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function App() {
  return (
    <div className="App">
      {/*the navbar*/}
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div className= "Container">
            <a href="/" className="navbar-brand"> Home </a>
          </div>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link disabled" href="http://localhost:3000/" tabindex="-1" aria-disabled="true">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="http://localhost:3000/" tabindex="-1" aria-disabled="true">Price</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="http://localhost:3000/" tabindex="-1" aria-disabled="true">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>

      <h1>
        Welcome in my profile
      </h1>
      <p> I'am a young developper fullstack and disigne, ready to do up your expriences.
        You can call us services for your Web Site or Applications, whene you need a visist cart ,logo,flyers,disigne web site,and anymore ... 
      </p>
      <h1>
        My realizations
      </h1>
      <p> Please go to the next checkpoints </p>
      <h4> Take a Appointment </h4>
      {/*the formular*/}
      <h5 className="form">
      <Form>
        <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Your datas</Form.Label>
          <Form.Control type="firstname" placeholder="firstName" />
          <Form.Label> </Form.Label>
          <Form.Control type="lastname" placeholder="LastName" />
          <Form.Label> </Form.Label>
          <Form.Control type="phone" placeholder="number phone" />
          <Form.Label> </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label>Discribe Your Services</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button id="btn" type="submit" class="btn btn-primary">Submit</button>
      </Form> 
      </h5>
      <MDBContainer className="footer" >
        &copy; {new Date().getFullYear()} Copyright: <a href="./">By_King_Yahassane </a>
      </MDBContainer>
    </div>    
  );
}

export default App;
