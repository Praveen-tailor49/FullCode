import React from 'react'
import Footer from '../components/Footer';
import TableWin from '../components/TableWin';
import WinHeader from '../components/WinHeader2';


const Win = ({userBalance}) => {
    return (
        <>
            {/* <WinNav/> */}
            {/* <WinHeader/> */}
            <WinHeader userBalance={userBalance}/>
            <TableWin/>
            <Footer/>
        </>
    )
}

export default Win