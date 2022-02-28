import React from 'react'
import { Table } from 'react-bootstrap';
import { AiFillTrophy } from 'react-icons/ai';
// import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const TableWin = () => {
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <div>
                    < AiFillTrophy />
                </div>
                <div>
                    <h6>Partiy Record</h6>
                </div>
            </div>
            <div style={{marginBottom:'6rem',  textAlign:'center'}}>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Price</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>85555</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>T</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableWin