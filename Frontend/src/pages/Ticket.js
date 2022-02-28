import React, {useState} from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'


const Ticket = () => {

    const [userTicketInfo, setUserTicketInfo] = useState({
        paymentHeading: '', paymentContent: '', paymentImage: '', status: '1', dateTime: new Date()
   })

   const HandlShow = (e) => {
       const { name, value } = e.target

       setUserTicketInfo((prastate) => ({
           ...prastate,
           [name]: value,
       }))
   }

    return (
        <>
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="#home" style={{ color: 'white' }}><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link> <span style={{ marginLeft: '42px' }}>Ticket</span> </Navbar.Brand>
                </Navbar>
            </div>

            <div>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Subject " name='subject' value={userTicketInfo.paymentHeading} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Payment Content" name='paymentContent' value={userTicketInfo.paymentContent} onChange={HandlShow} />
                        </Form.Group>



                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button variant="primary" style={{ width: '13rem' }} type="submit">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Ticket