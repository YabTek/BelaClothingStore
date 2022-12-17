import {React,useState} from 'react'
import { useDispatch} from 'react-redux';
import { css } from '@emotion/css'
// import { Dropdown, DropdownItem, DropdownMenu} from 'styled-dropdown-component';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Box,Flex,Heading} from 'rebass/styled-components'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
 

const Items = ({user}) => {
    const [hidden, setHidden] = useState(true);
    const [firstname,setFirstname] = useState(user.firstname);    
    const [lastname,setLastname] = useState(user.lastname);

    const [update,setUpdate] = useState(false)

    const handleDelete = async (user) => {
      await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
    }

  const handleUpdate =  async(user) => {
    if(update){
      await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          firstname : firstname,
          lastname: lastname,
          
      }
        ),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }, 
      });
      setFirstname(user.firstname)
      setLastname(user.lastname)
      

       
    }
    setUpdate(!update)
    }
     
  
  return (
    <div className={css`
    margin: 40px 60px; `}>
      <Flex className={css`
      border: 1px solid #ccc;
      border-radius: 10px;
      height: 85px;
      `} alignItems='center' px={3} py={4} bg = 'primary'>
        <Flex>
        <Heading>{user.firstname}</Heading>
        <Heading  px={2} >{user.lastname}</Heading>
        </Flex>

  <Box sx={{mx: 'auto', px: 3}} />
   {update?  (
    <div className={css`
    display:flex;
    flex-direction: column;
    margin-right: 20px;
    width: 200px;
    `}>
     <input placeholder='firstname'  value = {firstname} onChange = {(e) => setFirstname(e.target.value)}/>
     <input placeholder='lastname' value = {lastname} onChange = {(e) => setLastname(e.target.value)}/>
</div>) : ("")}
  <Tooltip title="Edit">
    <EditIcon onClick = {()=>handleUpdate(user)}/>
 </Tooltip>
 <Tooltip title="Delete">
    <DeleteForeverOutlinedIcon className = {css`
    color:red;
    margin-left: 12px;
  `} onClick = {() => handleDelete(user)}/>
  </Tooltip>
</Flex>
    </div>
  )
}

export default Items
