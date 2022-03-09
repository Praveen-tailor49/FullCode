import React from 'react'
import Footer from '../components/Footer';
import TableWin from '../components/TableWin';
import WinHeader from '../components/WinHeader2';


const Win = ({userBalance, baseUrl}) => {
    return (
        <>
            {/* <WinNav/> */}
            {/* <WinHeader/> */}
            <WinHeader userBalance={userBalance} baseUrl={baseUrl}/>
            <TableWin/>
            <Footer/>
        </>
    )
}

export default Win