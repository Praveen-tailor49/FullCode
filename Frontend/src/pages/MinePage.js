import React from 'react'
import MineDropdown from '../components/MineDropdown';
import Footer from '../components/Footer';
import MineNav from '../components/MineNav';


const MinePage = ({baseUrl}) => {
    return (
        <>
           <MineNav baseUrl={baseUrl} />
            
            <MineDropdown/>

            <Footer/>
           
        </>
    )
}

export default MinePage