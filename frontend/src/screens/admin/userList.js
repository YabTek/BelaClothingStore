import {React ,useState,useEffect} from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import userItem from './userItem'

const UserList = () => {
  const [users,setUsers] = useState([])

  const fetchUser = async() =>{
    const getuser = await axios.get('/users')
    setUsers(getuser.data)
    console.log(getuser.data)
 }
 
 useEffect(() =>{
       fetchUser();
 })
  return (
    <div>
      {users.map((user)=> <userItem key = {user.id} user = {user}/>)}
    </div>
  )
}

export default UserList