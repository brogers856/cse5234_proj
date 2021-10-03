import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import './Home.css'

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Row type="flex" justify="center" align="middle">
        <Col span={8}>
          <Title id="pageTitle" justify="center">WELCOME TO OLDEGG</Title>
        </Col>
      </Row>
      <Row className="card-container" type="flex" justify="center" align="middle">
        <Col span={20}>
          <Card id="missionCard">
            <Row type="flex" justify="center">
              <Col span={11}>
                <Title level={3} className="blurb-title" justify="start">OUR MISSION</Title>
                <p display="block">To provide our customers with affordable refurbished hardware, from individual components to full computers</p>
                <Title level={3} className="blurb-title" justify="start">OUR VISION</Title>
                <p display="block">Our vision is to provide an affordable entry point to the world of computer hardware</p>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <img className="home-img" src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="card-container" type="flex" justify="center" align="middle">
        <Col span={20}>
          <Card id="missionCard">
            <Row type="flex" justify="center">
              <Col span={11}>
                <img className="home-img" src="https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <Title level={3} className="blurb-title" justify="start">OUR STRATEGY</Title>
                <p>Our strategy is to use excellent customer service and easy access to affordable components to establish a loyal customer base</p>
                <Title level={3} className="blurb-title" justify="start">OUR MESSAGE TO YOU</Title>
                <p>We hope that you can find whatever you need on our site at a reasonable price, and that you give us your feedback!</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home;