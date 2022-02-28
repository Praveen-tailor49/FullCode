import React, {useState, useEffect} from 'react'
// import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TableGameResult = ({baseUrl}) => {
    const [result, setresult] = useState([])

    useEffect(() => {
        showResult();
    
      },[])
    
      const showResult = async () => {
        var myHeaders = new Headers();
myHeaders.append("Cookie", "Cookie_1=value");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(baseUrl+"showResult", requestOptions)
  .then(response => response.json())
  .then(result => {
    setresult(result)
  })
  .catch(error => console.log('error', error));
      }
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'ResultID',field:'Id', type: 'numeric' },
                   
                    { title: 'Time',field:'record', type: 'numeric' },
                    { title: 'Result', field: 'result' ,type:'text'},
                  
                   
                ]}
                data={result}
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

export default TableGameResult

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