import {React,useState} from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const SignupPage = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [Loading,setLoading] = useState("")


  const handleClick = (e)=>{
     e.preventDefault()
     console.log(email,password)
  }

  return (
    <div className = "main">
    <MDBContainer className="p-3  d-flex flex-column w-50">
    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name' value = {name} onChange = {(e) => setName(e.target.value)}/>

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
      <MDBBtn className=" log-button mb-4" onClick={handleClick}>Sign up</MDBBtn>
    </MDBContainer>
    </div>
  );
  
}

export default SignupPage

