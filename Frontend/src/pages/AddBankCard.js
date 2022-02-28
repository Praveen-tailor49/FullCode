import React, { useEffect, useState } from 'react'
import { Navbar, Form, Button, Card } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import ModalWin from '../components/ModalEditAdd';

const AddBankCard = ({baseUrl}) => {

    const [userBankInfo, setUserBankInfo] = useState({
        userId: localStorage.getItem('token'), actualName: '', ifseCode: '', bankName: '', accountNumber: '', state: '', city: '', address: '', mobileNumber: '', email: '', upiAccount: '', userStatus: 0, userDelete: 1,val:''
    })

    const [userBankDetails, setUserBankDetails] = useState([])
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        showBankDetails();
    },[])

    const showBankDetails = () => {
        document.getElementById('showDiv').style.display = 'none';
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

        fetch(baseUrl+"showBankDetails", requestOptions)
            .then(response => response.json())
            .then(result =>{

                setUserBankDetails(result.data)
            } 
            )
            .catch(error => console.log('error', error));
    }

    const HandlShow = (e) => {
        const { name, value } = e.target

        setUserBankInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const AddBankCardDetails = (e) => {

        e.preventDefault()

        const { userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete } = userBankInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl+"blankDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Add Successfully')
                    showBankDetails();
                   
                } else {
                    alert('Not Add')
                }
            })
            .catch(error => console.log('error', error));
    }

    const removeBankCard = () => {
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

        fetch(baseUrl+"remove/BankDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('remove')
                    showBankDetails();
                } else {
                    alert('not remove')
                }
            })
            .catch(error => console.log('error', error));
    }
    
    const editBankCard = (vals) => {
        setModalShow(true)
        setUserBankInfo({val:vals})
    }

    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Add Bank Card</Navbar.Brand>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '85vw' }}>
                        <div style={{ color: 'white', marginRight: '30px', cursor: 'pointer' }}>
                            <span onClick={() => document.getElementById('showDiv').style.display = 'block'}><AiOutlinePlus /></span>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ margin: '2rem' }}>
                    {
                        
                        userBankDetails ?
                        userBankDetails.map((val, index) => {
                            return (
                                <Card style={{ width: '18rem' }} key={index}>
                                    <Card.Body>
                                        <Card.Title>Bank Details</Card.Title>
                                        <Card.Text>
                                            <h6>Bank Name: <span>{val.bankName}</span></h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>Account Number:  <span>{val.accountNumber}</span> </h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>IFSE Code:  <span>{val.ifseCode}</span> </h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>Upi Account:  <span>{val.upiAccount}</span> </h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>Mobile Number:  <span>{val.mobileNumber}</span> </h6>
                                        </Card.Text>
                                        <Card.Text>
                                            <h6>State:  <span>{val.state}</span> </h6>
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ marginRight: '12px' }} >
                                                <Button variant="primary" onClick={() => editBankCard(val)}>Edit</Button>
                                            </div>
                                            <div>
                                                <Button variant="danger" onClick={() => removeBankCard()}>Remove</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                        :
                        <p>Not Add Bank detailes</p>
        
                    }

                </div>
            </div>
            <div style={{ display: 'none' }} id='showDiv'>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Actual Name" name='actualName' value={userBankInfo.actualName} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="IFSC Code" name='ifseCode' value={userBankInfo.ifseCode} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Bank Name" name='bankName' value={userBankInfo.bankName} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Account Number" name='accountNumber' value={userBankInfo.accountNumber} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State/Territory" name='state' value={userBankInfo.state} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="City" name='city' value={userBankInfo.city} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Address" name='address' value={userBankInfo.address} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={userBankInfo.mobileNumber} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" name='email' value={userBankInfo.email} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="UPI Account" name='upiAccount' value={userBankInfo.upiAccount} onChange={HandlShow} required />
                        </Form.Group>


                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{marginBottom:'6rem'}}>
                                <Button variant="primary" style={{ width: '13rem' }} type="submit" onClick={(e) => AddBankCardDetails(e)}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <ModalWin
                show={modalShow}
                onHide={() => setModalShow(false)}
                val={userBankInfo.val}
            />
            <Footer />
        </>
    )
}

export default AddBankCard