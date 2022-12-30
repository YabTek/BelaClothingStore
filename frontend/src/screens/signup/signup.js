import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2/Header2'
import {MDBContainer,MDBInput,MDBBtn,} from 'mdb-react-ui-kit';
import axios from 'axios';
import Loading from "../../components/Loading";
import ErrorMessage from '../../components/ErrorMessage';



const SignupPage = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState("")
  const navigate = useNavigate()


  const handleClick = async(e)=>{
     e.preventDefault()
     console.log(email,password)
     try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      setLoading(true)
      const {data} = await axios.post('users/register',{
        name,email,password
      },config


      )
      console.log(data)
      setLoading(false);
      localStorage.setItem("userInfo",JSON.stringify(data))
      const userInfo = localStorage.getItem("userInfo")
      if(userInfo){
      navigate("/login")
    }
     } catch (error) {
      setError('user already exist')
     } 
     setLoading(false)

  }

  return (
    <>
    <Header2/>
    
    <div className = "main">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

     {loading && <Loading/>}
    <MDBContainer className="p-3  d-flex flex-column w-50">
    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name' value = {name} onChange = {(e) => setName(e.target.value)}/>

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
      <MDBBtn className=" log-button mb-4" onClick={handleClick}>Sign up</MDBBtn>
    </MDBContainer>
    </div>
    </>
  );
  
}

export default SignupPage

