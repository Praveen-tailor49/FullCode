import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

 const ResetPassword = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{marginLeft:'42px', color:'white'}}><IoMdArrowRoundBack/></Link></Navbar.Brand>
                    <Navbar.Brand >Reset Password</Navbar.Brand>
                </Navbar>
            </div>

            <div style={{ padding: '30px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder={'Mobile Number'} required />
                        {/* <Form.Control type="text" placeholder={<FaMobileAlt/> + 'Mobile Number'} /> */}
                    </Form.Group>
                    <div style={{ display: 'flex'}}>
                        <div style={{ width: '70rem' }}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Verification Code" required />
                            </Form.Group>
                        </div>

                        <div  style={{ width: '10rem', marginLeft:'10px' }}>
                            <Button variant="secondary" type="submit">
                                OTP
                            </Button>
                        </div>
                    </div>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="New Password" required />
                    </Form.Group>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{marginBottom:'6rem'}}>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit">
                               Continue
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>

            <Footer/>
        </>
    )
}

export default ResetPassword
