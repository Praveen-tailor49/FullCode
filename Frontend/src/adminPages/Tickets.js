import React from 'react'
 
 
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
                title="Simple Action Preview"
                columns={[
                    { title: 'Ticket Id', field: 'ticketid' },
                    { title: 'User Id', field: 'uid' },
                    { title: 'Subject', field: 'sub', type: 'numeric' },
                    {
                        title: 'Message',
                        field: 'message',
                       
                    },
                ]}
                data={[
                    { ticketid: '12', uid: '4565', sub: "regarding", message: "hey there" },
                    { ticketid: '3', uid: '123', sub: "regarding", message: "hey" },
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