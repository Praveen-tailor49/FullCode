import React from 'react'
import { Button,Navbar ,Card ,Form , Row,Col} from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'
import wa  from './img/wa.png'

function Setting() {
  return (
    <div>
         <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Setting</Navbar.Brand>
                </Navbar>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
            
                <Card style={{ width: "50rem", height: "30rem", boxShadow: "5px 5px 5px gray" }} >
                    <h3 style={{ textAlign: "center", color: "green", marginTop: "40px", textShadow: "2px 2px lightgray" }}>Whatsapp</h3>
                   <p style={{textAlign: "center"}}>Contact On Whatsapp For Any Query</p>
                   
                       <div  style={{margin:"auto",marginTop:"2rem"}}>
                           <Row>
                           <img src={wa} height="90" width="60"/>
                           </Row>

                           <Row>
                            
                    <Button variant="success" style={{marginTop:"12rem",width:"8rem",margin:"auto",marginTop:"1rem"}} onClick={event =>  window.location.href='https://api.whatsapp.com/send?phone=917877444069'}>Whatsapp</Button>
                    </Row>
                    </div>
                   

                 
                </Card>
            </div>
    </div>
  )
}

export default Setting