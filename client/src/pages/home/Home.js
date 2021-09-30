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
      <Row className="card-container" type="flex" justify="space-between" >
          <Col span={10}>
            <Card id="missionCard" title="OUR MISSION">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor urna nulla, id porttitor tellus bibendum id.
                Quisque dictum erat non purus luctus, id tincidunt ipsum pulvinar. Praesent at nunc eu nisl maximus euismod. Donec tincidunt
                enim vel lectus imperdiet interdum. Ut feugiat efficitur volutpat. Praesent tempus mauris ac condimentum lacinia. Nullam in
                lobortis ligula. Cras quis ante aliquam, euismod sem sit amet, condimentum odio. Pellentesque dui nulla, varius vitae convallis
                vel, aliquet faucibus elit. Aliquam at tellus maximus metus volutpat porta. Donec ac rutrum sapien.
              </p>
            </Card>
          </Col>
          <Col span={10}>
            <Card id="visionCard" title="OUR VISON">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor urna nulla, id porttitor tellus bibendum id.
                Quisque dictum erat non purus luctus, id tincidunt ipsum pulvinar. Praesent at nunc eu nisl maximus euismod. Donec tincidunt
                enim vel lectus imperdiet interdum. Ut feugiat efficitur volutpat. Praesent tempus mauris ac condimentum lacinia. Nullam in
                lobortis ligula. Cras quis ante aliquam, euismod sem sit amet, condimentum odio. Pellentesque dui nulla, varius vitae convallis
                vel, aliquet faucibus elit. Aliquam at tellus maximus metus volutpat porta. Donec ac rutrum sapien.
              </p>
            </Card>
          </Col>
        </Row>
        <Row className="card-container" type="flex" justify="center">
          <Col span={16}>
          <Title level={3} class="blurb-title" justify="start">OUR STRATEGY</Title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor urna nulla, id porttitor tellus bibendum id.
                Quisque dictum erat non purus luctus, id tincidunt ipsum pulvinar. Praesent at nunc eu nisl maximus euismod. Donec tincidunt
                enim vel lectus imperdiet interdum. Ut feugiat efficitur volutpat. Praesent tempus mauris ac condimentum lacinia. Nullam in
                lobortis ligula. Cras quis ante aliquam, euismod sem sit amet, condimentum odio. Pellentesque dui nulla, varius vitae convallis
                vel, aliquet faucibus elit. Aliquam at tellus maximus metus volutpat porta. Donec ac rutrum sapien.
              </p>
          </Col>
        </Row>
        <Row className="card-container" type="flex" justify="center">
          <Col span={16}>
          <Title level={3} class="blurb-title" justify="start">OUR MESSAGE TO YOU</Title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor urna nulla, id porttitor tellus bibendum id.
                Quisque dictum erat non purus luctus, id tincidunt ipsum pulvinar. Praesent at nunc eu nisl maximus euismod. Donec tincidunt
                enim vel lectus imperdiet interdum. Ut feugiat efficitur volutpat. Praesent tempus mauris ac condimentum lacinia. Nullam in
                lobortis ligula. Cras quis ante aliquam, euismod sem sit amet, condimentum odio. Pellentesque dui nulla, varius vitae convallis
                vel, aliquet faucibus elit. Aliquam at tellus maximus metus volutpat porta. Donec ac rutrum sapien.
              </p>
          </Col>
        </Row>
      </>
    )
}

export default Home;