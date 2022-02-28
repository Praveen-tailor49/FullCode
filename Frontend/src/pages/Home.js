import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    {/* <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand> */}
                    <Navbar.Brand style={{ marginLeft: '42px' }}>Home</Navbar.Brand>
                </Navbar>
            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginTop: '10rem' }}>
                    <h2>Welcome to Home page</h2>
                    <div>
                        <Link to='/win'><Button style={{ width: '10rem', margin:'3rem' }} variant="primary" type="submit">
                            Visit Website
                        </Button></Link>
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default Home