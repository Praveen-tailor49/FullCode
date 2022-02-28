import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


export const Login = ({baseUrl}) => {

    const navigate = useNavigate()

    const [page, setPage] = useState(true)
    const [userInfo, setUserInfo] = useState({
        userMobile:'',
        userPassword:''
    })

    useEffect(()=>{

        if(localStorage.getItem('token')){
            navigate('/win')
        }
    })

    const HandlShow = (e) => {
        const { name, value} = e.target

        setUserInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const LoginPage = (e) => {

        e.preventDefault()

        const {userMobile, userPassword} = userInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userMobile": userMobile,
            "userPassword": userPassword
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl+"userLogin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.mess === 'Successfully'){
                    alert('login')
                    localStorage.setItem('token', result.data[0].userId)
                    navigate('/win')
                } else {
                    alert('Mobile number and Password is wrong')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <NavBar page={page} />

            <div style={{ padding: '30px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Mobile Number' name='userMobile' value={userInfo.userMobile} onChange={HandlShow} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name='userPassword' value={userInfo.userPassword} onChange={HandlShow} />
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit" onClick={(e) => LoginPage(e)}>
                                Login
                            </Button>
                        </div>

                        <div style={{marginBottom:'6rem'}}
                    >
                            <Link to='/register' onClick={() => setPage(false)}><Button style={{ width: '5rem', margin: '2px' }} variant="secondary" type="submit">
                                Register
                            </Button></Link>
                            <Link to = '/reset/password' style={{ textDecoration:'none'}}> <Button style={{ width: '10rem', margin: '5px' }} variant="secondary" type="submit">
                                Forgot Password?
                            </Button></Link>
                        </div>

                    </div>
                </Form>
            </div>
            <Footer />
        </>
    )
}
