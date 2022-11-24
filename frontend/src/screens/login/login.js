import {React,useEffect,useState} from 'react'
import './login.css'
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn} from 'mdb-react-ui-kit';
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage';


const LoginPage = (history) => {
  
  const [email,setEmail] = useState([])
  const [password,setPassword] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  
  
  
  const clickHandler = async(e)=>{
    e.preventDefault()
    console.log(email,password)
  
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    setLoading(true)
    
    const {data} = await axios.post("api/users/login",{
      email,password,
    },config
    )
    console.log(data)
    localStorage.setItem("userInfo",JSON.stringify(data))
    setLoading(false)
  } catch (error) {
    setError(error.response.data.message);
    setLoading(false);
  }}
  
  return (
    <div className  = "main">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
    <MDBContainer className="  d-flex flex-column w-50" >

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className=" log-button mb-4" onClick = {clickHandler}>Login</MDBBtn>

      <div className="text-center">
        <p>Don't have an account? <a href="#!">Signup</a></p>
      </div>

    </MDBContainer>
    </div>
  );
  
}

export default LoginPage
