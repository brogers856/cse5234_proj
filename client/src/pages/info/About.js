import React from "react";
import { Card, Row, Col, Space } from "antd";

const About = () => {
    
    return (
        <>
            <h1  style={{display: 'flex',  justifyContent:'center'}}>Meet the Team</h1>
            <Row style={{marginTop: "1rem", marginBottom: "1rem"}} justify="center">
                <Col span={12}>
                    <Card size="large" title="Logan Wolfe" extra={<b>Co-CEO</b>}>
                        <p>Test</p>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginTop: "1rem", marginBottom: "1rem"}} justify="center">
                <Col span={12}>
                    <Card size="large" title="Ben Rogers" extra={<b>Co-CEO</b>}>
                        <p>I am a graduating senior majoring in Computer Information Science. 
                        I have experience in many languages and frameworks, but I am most confident with Java, C#, and JavaScript.
                        I hope to become a full-stack web application developer after I graduate</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default About