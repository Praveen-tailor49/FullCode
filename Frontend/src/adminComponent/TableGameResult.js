import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components'
import MaterialTable from "material-table";
const TableGameResult = ({baseUrl}) => {
    const [result, setresult] = useState([])
    const [updatere, setupdatere] = useState({
        resultId: '', record: '', updateResult: ''
    })

    const showUpdate = () => {
        document.querySelector("#table").style.display = "none";
        document.querySelector("#edit").style.display = "block";

    }

    const showTable = () => {
        document.querySelector("#table").style.display = "block";
        document.querySelector("#edit").style.display = "none";

    }

    const handleShow = (e) => {
        const { name, value } = e.target

        setupdatere((prastate) => ({
            ...prastate,
            [name]: value,
        }));
    }

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

fetch("http://localhost:5000/showResult", requestOptions)
  .then(response => response.json())
  .then(result => {
    setresult(result)
  })
  .catch(error => console.log('error', error));
      }

      const updatedata = (e) => {
          e.preventDefault()
        const { resultId, record, updateResult } = updatere
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "Cookie_1=value");
      
      var raw = JSON.stringify({
        "resultID": resultId,
        "record": record,
        "updateResult": updateResult
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/updateResult", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.mess === 'Successfully') {
                alert('Successfully Add')
                // document.getElementById('editDiv').style.display = 'none';
                // document.getElementById('divTable').style.display = 'block';
                // showUser()
            }
        })
        .catch(error => console.log('error', error));
}

    return (
        <>
        <div style={{padding:'30px', display:"block"}} id="table" >

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
                        icon: 'remove',
                        tooltip: 'Remove Result',
                        onClick: (event, rowData) => alert("You saved  " + rowData.name)
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Edit Result',
                        onClick: (event, rowData) => showUpdate('edit', rowData.resultID)
                    }
                ]}
            />
        </div>

        <div id='edit' style={{ display: 'none', border: "0.4px solid white", borderRadius: "10px", boxShadow: "1px 1px 5px 1px #888888", margin: "30px" }}>
                <Container style={{ padding: "20px" }}>
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Record</Form.Label>
                            <Form.Control type="text" onChange={(e) => handleShow(e)} name='record' value={updatere.record} placeholder="Enter Record" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                                <Form.Label>Result </Form.Label>
                                <Form.Control type="text" name='updateResult' value={updatere.updateResult} onChange={(e) => handleShow(e)} placeholder="Enter Result" />
                            </Form.Group>
                            <Button variant="secondary" onClick={() => showTable('cancel')}>Cancel</Button>
                            <Button variant="success" type="submit" onClick={(e) => updatedata(e)}>Submit</Button>
                       
                        </Form>
                        </Container>
                        </div>

               
        </>
    )
}

export default TableGameResult
