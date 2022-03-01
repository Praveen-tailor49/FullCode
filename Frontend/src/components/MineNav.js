import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';

const MineNav = ({userData }) => {


    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <div>
                        <Navbar.Brand style={{ marginLeft: '30px' }}>Mine</Navbar.Brand>
                    </div>

                    {/* <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }} >
                        <div>
                            <BsFiles />
                        </div>
                        <div>
                            <FiMenu />
                        </div>
                    </div> */}
                </Navbar>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>

                {
                    userData.map((val, index) => (
                        <div style={{ padding: '30px' }} key={index}>
                            <div>
                                <h6>ID: {val.userId}</h6>
                            </div>
                            <div>
                                <h6>Mobile: +91{val.userMobile}</h6>
                            </div>
                            <div>
                                <h6>Nick Name: {val.userNickName}</h6>
                            </div>
                            <div>
                                <h6>Available balance: <BiRupee /> {val.userBalance}</h6>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default MineNav