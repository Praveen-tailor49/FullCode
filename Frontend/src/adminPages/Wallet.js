import React from 'react'
 
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
import AdminBackNav from '../adminComponent/AdminBackNav';

const TableCom = () => {
    return (
        <>
          <AdminBackNav />
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Wallet"
                columns={[
                    { title: 'Wallet Id', field: 'wid' },
                    { title: 'User id', field: 'uid' },
                    { title: 'Start Balance', field: 'startbalance', type: 'numeric' },
                    { title: 'Close Balance', field: 'closebalance', type: 'numeric' },
                  
    
                ]}
                data={[
                    { wid: '789', uid: '123', startbalance: 19 ,closebalance: 1, birthCity: 63 },
                    { wid: '78523', uid: '123', startbalance: 201 ,closebalance: 1, birthCity: 34 },
                ]}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    }
                ]}
            />
        </div>
               
        </>
    )
}

export default TableCom

// const Action = styled.div`
//     display:flex;
//     font-size: 20px;
// `;

// const Button = styled.div`
//     margin-Left: 1.5rem;
//     cursor: pointer;
    

//     @media screen and (min-width: 768px) {
//         margin-Left: 5rem;
//       }
// `;