import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'

const Footer = () => {
    const currentDate= new Date().getFullYear();
  return (
  <>
  <footer>
<Container>
    <Row>
<Col className='text-center py-3'>
    <p>proshop &copy; {currentDate}</p>
</Col>
    </Row>
</Container>

  </footer>
  </>
  )
}

export default Footer