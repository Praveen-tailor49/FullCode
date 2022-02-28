import React from 'react'
import { Navbar, Form, Dropdown, Button } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const Withdrawal = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Withdrawal</Navbar.Brand>
                </Navbar>
            </div>

            <div>
                <div style={{ backgroundColor: '#fb8c00', color: 'white' }}>
                    <p style={{ padding: '15px' }}>Please assure the bank details are correct otherwise company will not be responsible for any missing withdraw.. </p>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <h6 style={{ color: 'red' }}>Any problem? Contact <span style={{ color: '#0288d1' }}>WhatsApp</span></h6>
                </div>
            </div>

            <div style={{ marginTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h6 style={{ fontSize: '30px' }}>Balance: <BiRupee />0.00 </h6>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div>
                        <Form>
                            <Form.Group style={{ width: '15rem' }} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder='Enter withdrawal amount' /></Form.Group>
                        </Form>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <p>Fee:0, to account 0</p>
                    </div>
                </div>

                <div style={{ padding: '20px' }}>
                    <div >
                        <h6>Payout</h6>
                    </div>
                    <div>
                        <h6>Use bank to withdraw (EK)</h6>
                    </div>

                    <div>
                        <div style={{ marginTop: '15px' }}>
                            <Dropdown>
                                <Dropdown.Toggle style={{ width: '88vw', textAlign: 'inherit' }} id="dropdown-button-dark-example1" variant="light">
                                    Select Bank Card
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="light" style={{ width: '88vw' }}>
                                    <Dropdown.Item href="#/action-1" active>
                                        Add Bank Card
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div>
                        <Form>
                            <Form.Group style={{ width: '15rem' }} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder='Enter your login password' /></Form.Group>
                        </Form>
                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{margin:'4rem'}}>
                        <Button style={{ width: '10rem', marginBottom: '26px' }} variant="primary" type="submit">
                            Withdrawal
                        </Button>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Withdrawal