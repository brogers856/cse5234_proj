import React from "react";
import { Card, Row, Col } from "antd";

const About = () => {
    
    return (
        <>
            <h1  style={{display: 'flex',  justifyContent:'center'}}>Meet the Team</h1>
            <Row style={{marginTop: "1rem", marginBottom: "1rem"}} justify="center">
                <Col span={13}>
                    <Card size="large" title="Logan Wolfe" extra={<b>Co-CEO</b>}>
                        <p>I am a senior studying Computer Science and Engineering at The Ohio State University.
                        My current interests lie primarily in ML/AI, DevOps, and infrastructure. Most of my
                        experience is in Java and Python but I am confident with C and JavaScript as well. My
                        goal is to become an AI/ML engineer or a system architect once I graduate.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{marginTop: "1rem", marginBottom: "1rem"}} justify="center">
                <Col span={13}>
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