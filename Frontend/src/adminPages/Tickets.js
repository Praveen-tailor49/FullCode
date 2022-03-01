import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
import { Container, Form, Col, Row, Button, Card } from 'react-bootstrap';
import { IoMdAddCircle } from 'react-icons/io';
import AdminBackNav from '../adminComponent/AdminBackNav';

const Tickets = ({ baseUrl }) => {

    const [ticket, setTicket] = useState([])

    const [ticketData, setTicketData] = useState({
        userId: '', name: '', email: '', phone: '', subject: '', message: '', status: 'Pending', ticketId: ''
    })

    useEffect(() => {
        showTicket()
    }, [])

    const handShow = (e) => {
        const { name, value } = e.target

        setTicketData((prastate) => ({
            ...prastate,
            [name]: value,
        }));
    }

    const showTicket = () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "Cookie_1=value");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(baseUrl + "show/admin/Ticket", requestOptions)
            .then(response => response.json())
            .then(result => {
                setTicket(result)
            })
            .catch(error => console.log('error', error));
    }

    const showRegister = (val) => {

        if (val === 'add') {
            document.querySelector("#divTable").style.display = "none";
            document.querySelector("#show1").style.display = "block";
        }

        if (val === 'cancel') {
            document.querySelector("#divTable").style.display = "block";
            document.querySelector("#show1").style.display = "none";
        }
    };

    const removeUser = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "remove/admin/userTickets", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Successfully Remove')
                    showTicket()
                }
            })
            .catch(error => console.log('error', error));
    }

    const editTicket = (val, rowData) => {

        if (val === 'edit') {
            document.getElementById('editDiv').style.display = 'block';
            document.getElementById('divTable').style.display = 'none';
            setTicketData({
                userId: '', name: '', email: '', phone: '', subject: '', message: '', status: ''
            })
        }

        if (val === 'cencel') {
            document.getElementById('editDiv').style.display = 'none';
            document.getElementById('divTable').style.display = 'block';
        }
        setTicketData({
            ticketId: rowData.Id, name: rowData.name, email: rowData.email, phone: rowData.phone, subject: rowData.subject, message: rowData.message, status: rowData.status
        })

    }

    const editUserTicket = () => {
        const { ticketId, name, email, phone, subject, message, status } = ticketData
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            ticketId, name, email, phone, subject, message, status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl + "edit/admin/ticketDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.mess === 'Successfully') {
                    alert('Successfully Add')
                    document.getElementById('editDiv').style.display = 'none';
                    document.getElementById('divTable').style.display = 'block';
                    showTicket()
                }
            })
            .catch(error => console.log('error', error));
    }

    // const sendTicket = (e) => {

    //     e.preventDefault()

    //     const { ticketId, name, email, phone, subject, message, status } = ticketData
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         userId, name, email, phone, subject, message, status
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch(baseUrl + "user/tickets", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             if (result === 'Successfully') {
    //                 alert('Successfully send')
    //             }
    //             else {
    //                 alert('Not send')
    //             }
    //         }
    //         )
    //         .catch(error => console.log('error', error));
    // }

    return (
        <>
            <AdminBackNav />

            {/* <div style={{ marginLeft: "2rem", marginTop: "2rem", display: "flex", cursor: 'pointer' }}>
                <IoMdAddCircle style={{ width: "2rem", height: "2rem" }} onClick={() => showRegister('add')} />
                <span style={{ marginLeft: "0.7rem", fontSize: "1.5rem", fontWeight: "" }}>Add Ticket</span>
            </div> */}
            <div style={{ padding: '30px', display: 'block' }} id='divTable'>
                <MaterialTable
                    title="User Tickets"
                    columns={[
                        { title: 'User Id', field: 'userId' },
                        { title: 'Name', field: 'name' },
                        { title: 'Email', field: 'email' },
                        { title: 'Phone', field: 'phone' },
                        { title: 'Subject', field: 'subject', },
                        { title: 'Message', field: 'message', },
                        { title: 'Status', field: 'status' },
                    ]}
                    data={ticket}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit User',
                            onClick: (event, rowData) => editTicket('edit', rowData)
                        },
                        {
                            icon: 'remove',
                            tooltip: 'Remove User',
                            onClick: (event, rowData) => removeUser(rowData.userId)
                        },
                    ]}
                />
            </div>

            <div id='editDiv' style={{ display: 'none', border: "0.4px solid white", borderRadius: "10px", boxShadow: "1px 1px 5px 1px #888888", margin: "30px" }}>
                <Container style={{ padding: "20px" }}>
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" onChange={(e) => handShow(e)} name='name' value={ticketData.name} placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="name" name='email' value={ticketData.email} onChange={(e) => handShow(e)} placeholder="Enter nick name" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" onChange={(e) => handShow(e)} name='phone' value={ticketData.phone} placeholder="number" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Default select example" name='status' value={ticketData.status} onChange={(e) => handShow(e)} required>
                                    <option value="Pending">Pending</option>
                                    <option value="Resolve">Resolve</option>
                                </Form.Select>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="password" onChange={(e) => handShow(e)} name='subject' value={ticketData.subject} placeholder="Enter password" />
                                </Form.Group>    </Col>
                            <Col> <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" onChange={(e) => handShow(e)} name='message' value={ticketData.message} placeholder="Enter recode" />
                            </Form.Group>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Button variant="light" onClick={() => editTicket('cencel')}>Cencel</Button>
                            </Col>
                            <Col>
                                <Button variant="primary" onClick={() => { editUserTicket() }}>Save</Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </div>

            {/* <div id='show1' style={{ display: "none" }} >
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                    <Card style={{ width: "50rem", height: "30rem", boxShadow: "10px 10px 5px lightgray" }} >
                        <h3 style={{ textAlign: "center", color: "gray", marginTop: "40px", textShadow: "2px 2px lightgray" }}>Contact</h3>
                        <hr ></hr>
                        <Row style={{ margin: "auto" }}>

                            <Form>
                                <Row style={{ marginBottom: "5px" }}>
                                    <Col style={{ borderRadius: "8px" }}>
                                        <Form.Control placeholder="Name" name='name' value={ticketData.name} onChange={handShow} required />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Email" name='email' value={ticketData.email} onChange={handShow} required />
                                    </Col>
                                </Row>
                                <Row style={{ marginBottom: "5px" }}>
                                    <Col>
                                        <Form.Control placeholder="Phone" name='phone' value={ticketData.phone} onChange={handShow} required />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Subject" name='subject' value={ticketData.subject} onChange={handShow} required />
                                    </Col>
                                </Row>
                            </Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>MESSAGE</Form.Label>
                                <Form.Control as="textarea" rows={3} name='message' value={ticketData.message} onChange={handShow} required />
                            </Form.Group>

                        </Row>
                        <div style={{ padding: '30px', margin: "auto" }}>

                            <Button variant="primary" style={{ width: '13rem' }} onClick={(e) => sendTicket(e)} >
                                Continue
                            </Button>
                        </div>

                    </Card>

                </div>
            </div> */}

        </>
    )
}

export default Tickets

