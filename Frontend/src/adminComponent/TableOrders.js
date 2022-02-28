import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TableOrders = ({baseUrl}) => {

    const [order, setorder] = useState([])

    useEffect(() => {
        showOrder();
    
      },[])
    
      const showOrder = async () => {
        var myHeaders = new Headers();
myHeaders.append("Cookie", "Cookie_1=value");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(baseUrl+"showOrder", requestOptions)
  .then(response => response.json())
  .then(result => {
    setorder(result)
  })
  .catch(error => console.log('error', error));
      }



    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'OrderID',field:'Id', type: 'numeric' },
                    { title: 'UserID',field:'UserId' },
                    { title: 'Time',field:'timePeriod' },
                    { title: 'CardType', field: 'cardtype'},
                    { title: 'Amount', field: 'amount'},
                   
                ]}
                data={order}
                actions={[
                    {
                        icon: 'remove',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You deleted " + rowData.Id)
                    }
                ]}
            />
        </div>
               
        </>
    )
}

export default TableOrders

const Action = styled.div`
    display:flex;
    font-size: 20px;
`;

const Button = styled.div`
    margin-Left: 1.5rem;
    cursor: pointer;
    

    @media screen and (min-width: 768px) {
        margin-Left: 5rem;
      }
`;