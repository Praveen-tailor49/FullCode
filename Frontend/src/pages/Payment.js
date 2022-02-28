import React, { useState } from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';


const Payment = ({ baseUrl }) => {

    const [userPaymentInfo, setUserPaymentInfo] = useState({
        userId: localStorage.getItem('token'), paymentHeading: '', paymentContent: '', paymentImage: '', status: '1', dateTime: new Date()
    })

    const HandlShow = (e) => {
        const { name, value } = e.target

        setUserPaymentInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const paymentReq = (e) => {
        e.preventDefault()
        const { userId, paymentHeading, paymentContent, paymentImage, status, dateTime } = userPaymentInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, paymentHeading, paymentContent, paymentImage, status, dateTime
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "paymentReq", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Successfully')
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Payment</Navbar.Brand>
                </Navbar>
            </div>

            <div style={{ marginBottom: '7rem' }}>
                <div style={{ margin: '25px', boxShadow: '1px 1px 30px 1px gray', borderRadius: '10px' }}>
                    <div style={{ padding: '15px' }}>
                        <div style={{ padding: '5px' }}>
                            <p>My Promotion Code</p>

                            <hr />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Payment