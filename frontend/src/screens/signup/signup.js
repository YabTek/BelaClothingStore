import React from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const SignupPage = () => {
  return (
    <div className = "main">
    <MDBContainer className="p-3  d-flex flex-column w-50">
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
      <MDBBtn className=" log-button mb-4">Sign up</MDBBtn>
    </MDBContainer>
    </div>
  );
  
}

export default SignupPage

