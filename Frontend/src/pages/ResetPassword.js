import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

 const ResetPassword = ({baseUrl}) => {

    const [resetPassUser, setResetPassUser] = useState({
        userId: localStorage.getItem('token'), userMobile:'', userPassword:''
    }) 
    const handShow = (e) => {
        const { name, value } = e.target

        setResetPassUser((prastate) => ({
            ...prastate,
            [name]: value,
        }));
    }
    
    const resetPassword = (e) =>{

        
        e.preventDefault()
        const { userId, userMobile, userPassword } = resetPassUser
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, userMobile, userPassword
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl+"user/resetPassword", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Successfully Reset Password')
                    setResetPassUser({
                         userMobile:'', userPassword:''
                    }) 
                   
                }
            })
            .catch(error => console.log('error', error));
    }

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
                        <Form.Control type="text" placeholder={'Mobile Number'} name='userMobile' value={resetPassUser.userMobile} onChange={handShow} required />
                        {/* <Form.Control type="text" placeholder={<FaMobileAlt/> + 'Mobile Number'} /> */}
                    </Form.Group>
                    <div style={{ display: 'flex'}}>
                        <div style={{ width: '70rem' }}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Verification Code"  required />
                            </Form.Group>
                        </div>

                        <div  style={{ width: '10rem', marginLeft:'10px' }}>
                            <Button variant="secondary" type="submit">
                                OTP
                            </Button>
                        </div>
                    </div>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="New Password"name='userPassword' value={resetPassUser.userPassword} onChange={handShow} required />
                    </Form.Group>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{marginBottom:'6rem'}}>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit" onClick={(e)=>resetPassword(e)}>
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
