import React from 'react'
import './login.css'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const LoginPage = () => {
  return (
    <div className  = "main">
    <MDBContainer className="  d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className=" log-button mb-4">Login</MDBBtn>

      <div className="text-center">
        <p>Don't have an account? <a href="#!">Signup</a></p>
      </div>

    </MDBContainer>
    </div>
  );
  
}

export default LoginPage
