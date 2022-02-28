import React from 'react'
import AdminBackNav from '../adminComponent/AdminBackNav';
import { Form, Button,Row,Col,Container } from 'react-bootstrap';
import RichTextEditor from 'react-rte';
import Myeditor from './Myeditor'
const Pages = () => {
    return (
        <>
            <AdminBackNav />

            <div >
                <Container style={{maxWidth:"50rem",boxShadow:"10px 10px 5px lightgray", border:"2px solid lightgray",marginTop:"5rem"}}>
                <Row className="justify-content-md-center">
                 <Row style={{marginTop:"3rem"}}>
                    <Col xs s lg="3">
                    <h5>Page Name</h5>
                    </Col>
                    <Col>
                    <Form.Label><h5>About</h5></Form.Label>
                    </Col>
                 </Row>

                {/* row 2nd */}
                <Row style={{marginTop:"2rem"}}>
                <Col xs s lg="3">
                    <h5>Page Content</h5>
                    </Col>
                    <Col>
                    <Myeditor />
                    </Col>
                </Row>
               
               {/* row 3rd */}
                <Row style={{marginTop:"2rem",marginBottom:"3rem"}}>
                <Col xs s lg="3">
                    <h5>Status</h5>
                    </Col>
                    <Col>
                     <Button variant="outline-secondary">Enable</Button>{' '}
                    </Col>
                </Row>
            

                </Row>
                </Container> 


                {/* term and condition */}
                <Container style={{maxWidth:"50rem",boxShadow:"10px 10px 5px lightgray", border:"2px solid lightgray",marginTop:"5rem"}}>
                <Row className="justify-content-md-center">
                <Row style={{marginTop:"3rem"}}>
                    <Col xs s lg="3">
                    <h5>Page Name</h5>
                    </Col>
                    <Col>
                    <Form.Label><h5>Terms & Conditions</h5></Form.Label>
                    </Col>
                </Row>

                {/* row 2nd */}
                <Row style={{marginTop:"2rem"}}>
                <Col xs s lg="3">
                    <h5>Page Content</h5>
                    </Col>
                    <Col>
                    <Myeditor />
                    </Col>
                </Row>
               
               {/* row 3rd */}
                <Row style={{marginTop:"2rem",marginBottom:"3rem"}}>
                <Col xs s lg="3">
                    <h5>Status</h5>
                    </Col>
                    <Col>
                     <Button variant="outline-secondary">Enable</Button>{' '}
                    </Col>
                </Row>
            

                </Row>
                </Container> 

                {/* privacy and policy */}
                <Container style={{maxWidth:"50rem",boxShadow:"10px 10px 5px lightgray", border:"2px solid lightgray",marginTop:"5rem"}}>
                <Row className="justify-content-md-center">
                <Row style={{marginTop:"3rem"}}>
                    <Col xs s lg="3">
                    <h5>Page Name</h5>
                    </Col>
                    <Col>
                    <Form.Label><h5>Privacy & Policy</h5></Form.Label>
                    </Col>
                </Row>

                {/* row 2nd */}
                <Row style={{marginTop:"2rem"}}>
                <Col xs s lg="3">
                    <h5>Page Content</h5>
                    </Col>
                    <Col>
                    <Myeditor />
                    </Col>
                </Row>
               
               {/* row 3rd */}
                <Row style={{marginTop:"2rem",marginBottom:"3rem"}}>
                <Col xs s lg="3">
                    <h5>Status</h5>
                    </Col>
                    <Col>
                     <Button variant="outline-secondary">Enable</Button>{' '}
                    </Col>
                </Row>
            

                </Row>
                </Container> 

                {/* risk disclousere */}

                <Container style={{maxWidth:"50rem",boxShadow:"10px 10px 5px lightgray", border:"2px solid lightgray",marginTop:"5rem"}}>
                <Row className="justify-content-md-center">
                <Row style={{marginTop:"3rem"}}>
                    <Col xs s lg="3">
                    <h5>Page Name</h5>
                    </Col>
                    <Col>
                    <Form.Label><h5>Risk Disclousere</h5></Form.Label>
                    </Col>
                </Row>

                {/* row 2nd */}
                <Row style={{marginTop:"2rem"}}>
                <Col xs s lg="3">
                    <h5>Page Content</h5>
                    </Col>
                    <Col>
                    <Myeditor />
                    </Col>
                </Row>
               
               {/* row 3rd */}
                <Row style={{marginTop:"2rem",marginBottom:"3rem"}}>
                <Col xs s lg="3">
                    <h5>Status</h5>
                    </Col>
                    <Col>
                     <Button variant="outline-secondary">Enable</Button>{' '}
                    </Col>
                </Row>
            

                </Row>
                </Container> 
            </div>
        </>
    )
}

export default Pages