import React, {useState, useEffect} from 'react'
import AdminBackNav from '../adminComponent/AdminBackNav';
import styled from 'styled-components'
// import TextField  from '@mui/material/TextField' ;
// import MaterialTable from "material-table";
import MyEditor from './Myeditor'
// import { Container } from '@material-ui/core';
import {Container,Col,Row,Form,Button} from "react-bootstrap"
import Myeditor from './Myeditor'

function GameRules() {
  const [ruleC, setrules] = useState({
    rules:'', Id:''
  });

useEffect(() => {
  showRule()
},[])

  const showRule = (e) => {

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/showRules", requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result)
              setrules(
                    {
                      rules: result[0].rules,
                        Id: result[0].Id

                    }
                )
            })
            .catch(error => console.log('error', error));
        }
    const updateRule = (e) => {

        e.preventDefault()
        const { rules, Id} = ruleC
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          rules, Id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/update/rule/page", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Successfully Add')
                }
                else {
                    alert('err')
                }
            })
            .catch(error => console.log('error', error));
    }

    const handRule = (e) => {
        const { name, value } = e.target

        setrules((prastate) => ({
            ...prastate,
            [name]: value,
        }));
    }

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
                    <textarea style={{width:"90%", height:"161px"}} onChange={(e) => handRule(e)} type="text" name='rules' value={ruleC.rules}/>
                    </Col>
                </Row>
               
               {/* row 3rd */}
                <Row style={{marginTop:"2rem",marginBottom:"3rem"}}>
               
                    <Col>
                     <Button variant="outline-secondary" onClick={(e)=>updateRule(e)}>Submit</Button>{' '}
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