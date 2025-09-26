import React, { useState } from 'react'
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";


const New = () => {
    const [ count, setCount] = useState(10);
    const [ name, setName] = useState("");
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
  return (
    <div>
      <section>
        <Container>
            <Row>
                <Col>
                    <p>current count value is {count}</p>
                    <button onClick={increment}> + </button>
                    <button onClick={decrement}> - </button>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default New
