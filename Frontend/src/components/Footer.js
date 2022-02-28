import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { GiMedal } from 'react-icons/gi';
import { FaGamepad, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
           <div style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: '#C0C0C0', textAlign: 'center', }}>
                <div>
                    <Row>
                        <Col>
                            <Link to='/home' style={{textDecoration:'none'}}>
                                <div style={{courser :'poniter', color:'black'}}>
                                <span><FaGamepad /></span>
                                <p>Home</p>
                                </div>
                            </Link>
                        </Col>
                        
                        <Col>
                            <Link to='/win' style={{textDecoration:'none'}}>
                                <div style={{courser :'poniter', color:'black'}}>
                                <span><GiMedal /></span>
                                <p>Period</p>
                                </div>
                            </Link>
                        </Col>

                        <Col>
                            <Link to='/mine' style={{textDecoration:'none'}}>
                                <div style={{courser :'poniter', color:'black'}}>
                                <span><FaUserCircle /></span>
                                <p>Mine</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer