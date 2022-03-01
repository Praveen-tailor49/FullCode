import React, { useState } from 'react'
import './Login.css'
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const LoginAdmin = () => {

    const navigate = useNavigate()

    const [adminUser, setAdminUser] = useState({
        email:'', password:''
    })

    const handlShow = (e) =>{
        const {name, value} = e.target

        setAdminUser(presate => ({
            ...presate,
            [name]:value
        }))
    }


    const loginAdmin = (e) =>{

        e.preventDefault()
        const {email, password} = adminUser
        
        if(email === 'admin123@gmail.com' && password === 'admin@123'){
            alert('login')
            localStorage.setItem('adtoken', 'ad1111/123' )
            navigate('/admin')
        } else {
            alert('Email password is wrong')
        }

    }

    return (
        <>
        <Body>
            <div className="wrapper">
                <div className="containers">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>Welcome Admin</h2>
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>Login</h2>
                            <form>
                                <p>
                                    <label>Email address<span>*</span></label>
                                    <input type="text" placeholder="Email" name='email' value={adminUser.email}  onChange={handlShow} required />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" name='password' value={adminUser.password} onChange={handlShow} required />
                                </p>
                                <p>
                                    <input type="submit" value="Sing In" onClick={(e)=>loginAdmin(e)} />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Body>
        </>
    )
}

export default LoginAdmin

const Body = styled.div`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  background: #eaeff4;
`;

