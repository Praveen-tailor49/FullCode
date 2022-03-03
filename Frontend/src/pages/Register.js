import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export const Register = ({baseUrl}) => {
    console.log(baseUrl);
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        userName:'',
        userMobile:'',
        userNickName:'',
        userPassword: '',
        userReCode:'',
        userBalance:'0',
        userStatus:'0',
        userDelete:'1'
    })

    useEffect(()=>{

        if(localStorage.getItem('token')){
            navigate('/win')
        }
    })


    const HandlShow = (e) => {
        const { name, value} = e.target

        setUserData((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const singIn = (e) => {
        e.preventDefault()

        const {userName, userBalance, userMobile, userNickName, userPassword, userReCode,userStatus,userDelete} = userData
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl+"signUp", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.mess === 'Successfully'){
                    toast.success('SingUp Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    navigate('/')
                } else {
                    
                    toast.error('Already Use Account', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <NavBar />

            <div style={{ padding: '30px' }}>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder='Enter Name' value={userData.userName} name='userName' onChange={HandlShow} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="number" placeholder={'Mobile Number'} value={userData.userMobile} name='userMobile' onChange={HandlShow} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Enter Nick Name' value={userData.userNickName} name='userNickName' onChange={HandlShow} required />
                    </Form.Group>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70rem' }}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Verification Code" required />
                            </Form.Group>
                        </div>

                        <div style={{ width: '10rem', marginLeft: '10px' }}>
                            <Button variant="secondary">
                                OTP
                            </Button>
                        </div>
                    </div>


                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password" value={userData.userPassword} name='userPassword' onChange={HandlShow} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Recommendation Code" value={userData.userReCode} name='userReCode' onChange={HandlShow} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Check type="checkbox" label="I agree PRIVACY POLICY" required/>
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{marginBottom:'6rem'}}>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit" onClick={(e)=>singIn(e)}>
                                Register
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            <Footer />
            <ToastContainer/>
        </>
    )
}
