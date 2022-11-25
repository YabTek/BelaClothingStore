import {useState,React} from 'react'
import './login.css'
import { MDBContainer,MDBInput, MDBCheckbox, MDBBtn,}
  from 'mdb-react-ui-kit';
import axios from 'axios';
import Loading from "../../components/Loading";
import ErrorMessage from '../../components/ErrorMessage';


const LoginPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)

  const handleClick= async(e)=>{
    e.preventDefault()
    try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      setLoading(true)
      const {data} = await axios.post('/api/users/login',{
        email,password
      },config);
      console.log(data)
      localStorage.setItem('userInfo',JSON.stringify(data))
      setLoading(false)
      localStorage.setItem("userInfo",JSON.stringify(data))

    } catch (error) {
        setError('Invalid email or password')
    }
    setLoading(false)

  }
  return ( 
    <div className  = "main">
       {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

      {loading && <Loading/>}
    <MDBContainer className="  d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>
      <MDBBtn className=" log-button mb-4" onClick = {handleClick}>Login</MDBBtn>


      <div className="text-center">
        <p>Don't have an account? <a href="/signup">Signup</a></p>
      </div>

    </MDBContainer>
    </div>
  );
  
}

export default LoginPage
