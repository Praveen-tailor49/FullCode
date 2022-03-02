import React, { useState, useEffect } from 'react'
import { Navbar, Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import { AiOutlinePlus } from 'react-icons/ai';


const AddAddress = ({ baseUrl }) => {

    const [userAddressInfo, setUserAddressInfo] = useState({
        userId: localStorage.getItem('token'), fullName: '', mobileNumber: '', pinCode: '', state: '', city: '', detaileAddress: '', status: '1', deleteStatus: '1'
    })

    const [userAddressDetails, setUserAddressDetails] = useState([])


    useEffect(() => {
        showAddressDetails();
    }, [])


    const showAddressDetails = () => {
        document.getElementById('addDiv').style.display = 'none'
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId: localStorage.getItem('token')
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "showAddressDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUserAddressDetails(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const HandlShow = (e) => {
        const { name, value } = e.target

        setUserAddressInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const AddAddressDetails = (e) => {

        e.preventDefault()

        const { userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus } = userAddressInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "addressDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Add Successfully')
                    showAddressDetails();
                } else {
                    alert('Not Add')
                }
            })
            .catch(error => console.log('error', error));
    }

    const removeAddress = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userId": localStorage.getItem('token')
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "remove/AddressDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('remove')
                    showAddressDetails();
                } else {
                    alert('not remove')
                }
            })
            .catch(error => console.log('error', error));
    }

    const editAddCard = (val) => {

        document.getElementById('editDiv').style.display = 'block'
        document.getElementById('addUserDiv').style.display = 'none'

        setUserAddressInfo({
            userId: val.userId, fullName: val.fullName, mobileNumber: val.mobileNumber, pinCode: val.pinCode, state: val.state, city: val.city, detaileAddress:val.detaileAddress
        })
    }

    const updateAdd = (e) => {

        e.preventDefault()

        const { userId, fullName, mobileNumber, pinCode, state, city, detaileAddress } = userAddressInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, fullName, mobileNumber, pinCode, state, city, detaileAddress
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "edit/AddDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('edit')
                    document.getElementById('addUserDiv').style.display = 'block'
                    document.getElementById('editDiv').style.display = 'none'
                    showAddressDetails();
                } else {
                    alert('not edit')
                }
            })
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Add Address</Navbar.Brand>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '85vw' }}>
                        <div style={{ color: 'white', marginRight: '30px', cursor: 'pointer' }}>
                            <span onClick={() => {
                                userAddressInfo({
                                    userId:'', fullName: '', mobileNumber: '', pinCode: '', state: '', city: '', detaileAddress: '', status: '1', deleteStatus: '1'
                                })
                                document.getElementById('addDiv').style.display = 'block'
                                document.getElementById('addUserDiv').style.display = 'none'
                                document.getElementById('editDiv').style.display = 'none'
                            }}><AiOutlinePlus /></span>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ margin: '2rem', display: 'block' }} id='addUserDiv'>
                    {
                        userAddressDetails ?
                            userAddressDetails.map((val, index) => {
                                return (
                                    <Card style={{ width: '18rem' }} key={index}>
                                        <Card.Body>
                                            <Card.Title>Address Details</Card.Title>
                                            <Card.Text>
                                                <h6>Name: <span>{val.fullName}</span></h6>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Mobile Number:  <span>{val.mobileNumber}</span> </h6>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Pin Code:  <span>{val.pinCode}</span> </h6>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Address:  <span>{val.detaileAddress}</span> </h6>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>City:  <span>{val.city}</span> </h6>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>State:  <span>{val.state}</span> </h6>
                                            </Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <div style={{ marginRight: '12px' }} >
                                                    <Button variant="primary" onClick={() => editAddCard(val)}>Edit</Button>
                                                </div>
                                                <div>
                                                    <Button variant="danger" onClick={() => removeAddress()}>Remove</Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                            :
                            <p>not add address</p>
                    }

                </div>
            </div>
            <div style={{ display: 'none' }} id='addDiv'>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Full Name" name='fullName' value={userAddressInfo.fullName} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={userAddressInfo.mobileNumber} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Pincode" name='pinCode' value={userAddressInfo.pinCode} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State" name='state' value={userAddressInfo.state} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Town/City" name='city' value={userAddressInfo.city} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Detail Address" name='detaileAddress' value={userAddressInfo.detaileAddress} onChange={HandlShow} />
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Row>
                                    <Col>
                                        <Button variant="secondary" onClick={() => {
                                            document.getElementById('addDiv').style.display = 'none'
                                            document.getElementById('addUserDiv').style.display = 'block'
                                            document.getElementById('editDiv').style.display = 'none'
                                        }} >Cencel</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary" style={{ width: '13rem' }} type="submit" onClick={(e) => AddAddressDetails(e)}>
                                            Save
                                        </Button>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            <div id='editDiv' style={{ display: 'none', border: "0.4px solid white", borderRadius: "10px", boxShadow: "1px 1px 5px 1px #888888", margin: "30px", marginBottom: '5rem' }}>
                <Container style={{ padding: "20px" }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Full Name" name='fullName' value={userAddressInfo.fullName} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={userAddressInfo.mobileNumber} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Pincode" name='pinCode' value={userAddressInfo.pinCode} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State" name='state' value={userAddressInfo.state} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Town/City" name='city' value={userAddressInfo.city} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Detail Address" name='detaileAddress' value={userAddressInfo.detaileAddress} onChange={HandlShow} />
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Row>
                                    <Col>
                                        <Button variant="secondary" onClick={() => {
                                    document.getElementById('addDiv').style.display = 'none'
                                    document.getElementById('addUserDiv').style.display = 'block'
                                    document.getElementById('editDiv').style.display = 'none'
                                }} >Cencel</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary" onClick={(e) => updateAdd(e)}  >Save</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AddAddress