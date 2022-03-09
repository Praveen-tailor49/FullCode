import React, { Component } from "react";
import { Card, Row, Form, Col, DropdownButton, Dropdown, Button } from "react-bootstrap"
import AdminBackNav from '../adminComponent/AdminBackNav';

export default class Gamesetting extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }   

  handleChange1(checked1) {
    this.setState({ checked1 });
  }

  handleChange2(checked2) {
    this.setState({ checked2 });
  }

  handleChange3(checked3) {
    this.setState({ checked3 });
  }

 check = () =>{
   document.getElementById('showDiv').style.display= 'Block'
 }

  render() {
    return (
      <>
        <AdminBackNav />
        <div style={{ marginTop: "6rem", display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "50rem", height: "30rem", boxShadow: "5px 5px 5px gray" }} >
            <h4 style={{ textAlign: "center", color: "gray", marginTop: "2rem" }}>Game Settings</h4>
            <hr></hr>
            <Form style={{ margin: "auto", padding: "20px" }}>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>

                      <Row>
                        <Col>
                          <Form.Check
                            inline
                            onClick={this.check('first')}
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </Col>

                        <Col>
                          <div>
                            Select Winner
                          </div>
                        </Col>

                        <Col style={{display:'none'}} id='showDiv'>
                          <DropdownButton align="Center" title="Choose" id="dropdown-menu-align-Center">
                            <Dropdown.Item eventKey="1">A</Dropdown.Item>
                            <Dropdown.Item eventKey="2">B</Dropdown.Item>
                            <Dropdown.Item eventKey="3">T</Dropdown.Item>
                          </DropdownButton>
                        </Col>

                      </Row>

                      <Row>
                        <Col>
                          <Form.Check
                            inline
                            onClick={this.check('sec')}
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </Col>

                        <Col>
                          <div>
                            Minimum winner
                          </div>
                        </Col>

                        <Col>

                        </Col>


                      </Row>

                      {/* 3rd */}
                      <Row style={{ marginTop: "8rem" }}>
                        <Col>

                        </Col>

                        <Col>
                          <Button variant="success">Save</Button>{' '}
                        </Col>

                        <Col >

                        </Col>


                      </Row>

                      {/* 3rdend */}


                    </Row>
                  </div>
                </div>

              )
              )}
            </Form>
          </Card>
        </div>
      </>
    );
  }
}