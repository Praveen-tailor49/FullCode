import React, {useEffect, useState} from 'react'
import { Modal, Button, Container, Form } from 'react-bootstrap';


const ModalWin = (props) => {

    const [userBankInfo, setUserBankInfo] = useState({
        userId: localStorage.getItem('token'), actualName: props.val.actualName, ifseCode: props.val.ifseCode, bankName: props.val.bankName, accountNumber: props.val.accountNumber, state: props.val.state, city: props.val.city, address: props.val.address, mobileNumber: props.val.mobileNumber, email: props.val.email, upiAccount: props.val.upiAccount, userStatus: '0', userDelete: '1'
    })

    useEffect(()=>{
        setUserBankInfo({
            userId: props.val.userId
            ,actualName: props.val.actualName, ifseCode: props.val.ifseCode, bankName: props.val.bankName, accountNumber: props.val.accountNumber, state: props.val.state, city: props.val.city, address: props.val.address, mobileNumber: props.val.mobileNumber, email: props.val.email, upiAccount: props.val.upiAccount,
        })
    },[])
    // const [show, setShow] = useState(false)

    const HandlShow = (e) => {

        const { name, value } = e.target

        setUserBankInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const editBank = () => {

    }
// console.log( props.val.actualName);
    return (
        <>
            <div>
                <Container>
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Edit Address
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Actual Name" name='actualName'   onChange={HandlShow} required />
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
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.onHide}>Back</Button>
                            <Button onClick={(e) => editBank(e)}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        </>
    )
}

export default ModalWin