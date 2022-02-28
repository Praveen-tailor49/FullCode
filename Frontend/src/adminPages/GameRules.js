import React from 'react'
import AdminBackNav from '../adminComponent/AdminBackNav';
import styled from 'styled-components'
// import TextField  from '@mui/material/TextField' ;
// import MaterialTable from "material-table";
import MyEditor from './Myeditor'
// import { Container } from '@material-ui/core';
import {Container,Col,Row,Form,Button} from "react-bootstrap"
import Myeditor from './Myeditor'

function GameRules() {
  return (
    <>
        <AdminBackNav/>
        
        <div>
        
          <Container style={{maxWidth:"40rem",boxShadow:"10px 10px 5px gray",border:"2px solid gray",marginTop:"30px"}}>
            <Row>
            <Row style={{marginTop:"3rem"}}>
                    <Col xs s lg="3">
                    <h5>Page Name</h5>
                    </Col>
                    <Col>
                    <Form.Label><h5>Game Rules</h5></Form.Label>
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
        {/* <div style={{padding:'30px'}}>
        
   

        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={10}
          
          
        />

       </div> */}

    </>
  )
}

export default GameRules