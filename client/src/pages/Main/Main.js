// import React from 'react';

// import { useQuery } from '@apollo/client';

// export default Home;

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const API_URL =
  "https://gnews.io/api/v4/top-headlines?q={term}&token=0d11668f5e5325f011212b86a61636fe&lang=en&country=us&max=10";

const Main = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    query("headlines");
  }, []);

  function query(term) {
    fetch(API_URL.replace("{term}", term))
      .then((res) => res.json())
      .then((data) => setFeed(data.articles));
  }

  console.log(feed);

  return (
    <>
      <NavBar />
      <br></br>
      <div className="conatiner">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {feed.map((article, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Main;
