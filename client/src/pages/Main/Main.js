// import React from 'react';

// import { useQuery } from '@apollo/client';

// export default Home;

import React from 'react';
import NavBar from '../NavBar/NavBar';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Main = () => {
  return (
    <>
      <NavBar/>
      <br></br>
      <div className="conatiner">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img 
                variant="top" src="image.png"/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Row>
      </div>
    </>
  )
}

export default Main;