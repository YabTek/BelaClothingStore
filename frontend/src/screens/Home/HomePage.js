import { React,  useEffect, useState } from 'react'
import './HomePage.css'
import {Container,Row,Col, Card} from 'react-bootstrap'
import axios from 'axios'
//const clothes = require('../../data/clothdata')

const HomePage = () => {
    const [clothes, setClothes] = useState([])

    const fetchCloth = async() =>{
       const {data} = await axios.get('/api/clothes')
       setClothes(data)
    }
    console.log(clothes)
    
    useEffect(() =>{
          fetchCloth();
    },[])

  return (
    <div className = "main">
      <h1 className = ' heading'>Be modern with our clothes</h1>
      <Container>

            <Row>
                {clothes.map((item, k) => (
                    <Col key={k} xs={12} md = {4} lg = {3}>
                        <Card className= "card">
                            <Card.Img className = "card-img" src= {item.img} />

                            <Card.Body className='card-body'>
                            <Card.Title>price:{item.price}</Card.Title>
                                <Card.Text>size:{item.size}</Card.Text>
                                <button className = "btn btn-primary">Order</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default HomePage
