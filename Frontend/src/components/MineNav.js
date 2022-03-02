import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';

const MineNav = ({userData }) => {


    return (
        <>
            <div>
                    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container style={{marginLeft:'2rem',marginRight:'0.1rem'}}>
  <Navbar.Brand href="#home" >Mine</Navbar.Brand>
    <Nav>
      <Nav.Link href="#deets" style={{color:"white", fontSize:"20px", fontWeight:"10px"}}>Logout</Nav.Link>
    </Nav>
  </Container>

                    {/* <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }} >
                        <div>
                            <BsFiles />
                        </div>
                        <div>
                            <FiMenu />
                        </div>
                    </div> */}
                </Navbar>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>

                {
                    userData.map((val, index) => (
                        <div style={{ padding: '30px' }} key={index}>
                            <div>
                                <h6>ID: {val.userId}</h6>
                            </div>
                            <div>
                                <h6>Mobile: +91{val.userMobile}</h6>
                            </div>
                            <div>
                                <h6>Nick Name: {val.userNickName}</h6>
                            </div>
                            <div>
                                <h6>Available balance: <BiRupee /> {val.userBalance}</h6>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default MineNav