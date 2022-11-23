import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import './Mypurchase.css'
import axios from 'axios'
import { useEffect } from 'react'

const MypurchasePage = () => {
  const fetchCloth = async() =>{
    const {data} = await axios.get('/api/purchase')
    console.log(data)
 }
 useEffect(() =>{
       fetchCloth();
 },[])

  return (
    <div className = "main">
      <h1 className = "heading text-center">Here are your list of purchases</h1>
      <Container> 
        <Row>
          <Col>Items</Col>
          <Col>price</Col> 
          <Col>date of delivery</Col>

        </Row>
      </Container>
    </div>
  )
}

export default MypurchasePage
