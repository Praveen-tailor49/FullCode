import React, { useState, useEffect } from 'react'
import { BiRupee, BiRefresh } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import ModalReadRule from './ModalReadRule';
import { Link } from 'react-router-dom'
import coin1 from '../image/coins-img/coin-1.png'
import coin2 from '../image/coins-img/coin-2.png'
import coin3 from '../image/coins-img/coin-3.png'
import coin6 from '../image/coins-img/coin-6.png'
import coin10 from '../image/coins-img/coin-10.png'
import ModalRupesSelect from './ModalRupesSelect';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WinHeader = ({ baseUrl, userBalance }) => {
    
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [valueRupess, setValueRupess] = useState('10');
    const [cardValue, setCardValue] = useState('');

    const refreshPage = () => {
        window.location.reload();
    }

    const checkoutOrder = (val) => {
        showModal2(val)
        console.log(val);
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "userId": localStorage.getItem("token"), "userName": "surbhi", "time": 2.15, "cardtype": cardValue, "amount": valueRupess, "Period": 20220210208 });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(baseUrl +"orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    toast.success('Successfully Add', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });

                } else {
                    alert('Login Required')
                    toast.error('Login Required', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        document.getElementById("img10").style.boxShadow = "0px 0px 30px 2px green"
    }, [])

    const showModal2 = (val) => {
        setCardValue(val)
        setModalShow2(true)

        if (val === 'tie') {
            document.getElementById('tie').style.boxShadow = '0px 0px 30px 2px  green';
        } else {
            document.getElementById('tie').style.boxShadow = '1px 1px gray';
        }

        if (val === 'andar') {
            document.getElementById('andar').style.boxShadow = '0px 0px 30px 2px  blue';
        } else {
            document.getElementById('andar').style.boxShadow = '1px 1px gray';
        }

        if (val === 'bahar') {
            document.getElementById('bahar').style.boxShadow = '0px 0px 30px 2px  red';
        } else {
            document.getElementById('bahar').style.boxShadow = '1px 1px gray';
        }


    }
    const showDiv = (val) => {

        setValueRupess(val)

        if (val === "10") {
            document.getElementById("img10").style.boxShadow = "0px 0px 30px 2px #ACA44C"
        }
        else {
            document.getElementById("img10").style.boxShadow = "1px  1px grey"

        }
        if (val === "100") {
            document.getElementById("img100").style.boxShadow = "0px 0px 30px 2px #f4b424"
        } else {
            document.getElementById("img100").style.boxShadow = "1px  1px grey"

        } if (val === "500") {
            document.getElementById("img500").style.boxShadow = "0px 0px 30px 2px #EC1C54"
        } else {
            document.getElementById("img500").style.boxShadow = "1px  1px grey"

        } if (val === "1000") {
            document.getElementById("img1000").style.boxShadow = "0px 0px 30px 2px #BC4C9C"
        } else {
            document.getElementById("img1000").style.boxShadow = "1px  1px grey"

        } if (val === "10000") {
            document.getElementById("img10000").style.boxShadow = "0px 0px 30px 2px #14BC9C"
        } else {
            document.getElementById("img10000").style.boxShadow = "1px  1px grey"

        } if (val === "green") {
            document.getElementById("green").style.boxShadow = "0px 0px 30px 2px green"
        } else {
            document.getElementById("green").style.boxShadow = "1px  1px grey"

        }
    }

    return (
        <>
            <div style={{ backgroundColor: '#1E90FF', color: 'white' }}>
                <p style={{ padding: '30px' }}>You can only withdraw cash after your bet amount recharge the top-up amount. For example, if you recharge 200rs, you can withdraw money only after your accumulated bet amountreaches 200rs. Our withdrawal time is 10:00-22:00, other time will not provide withdrawal services. </p>
            </div>
            <div style={{ backgroundColor: '#6495ED', color: 'white', marginTop: '-16px' }}>
                <div>
                    <h6 style={{ padding: '20px' }}>Available balance: {userBalance} <BiRupee /></h6>
                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
                    <div >
                        <Link to='/recharge'><Button variant="primary">Recharge</Button></Link>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Button variant="light" onClick={() => setModalShow1(true)}>Read Rule</Button>
                    </div>

                    <div style={{ marginLeft: '20px' }}>
                        <Button variant="dark" onClick={refreshPage}>Reload<BiRefresh /></Button>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>
                <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-around' }}>


                    <div>
                        <Row>
                            <Col style={{ marginRight: "-25px" }}>

                                < AiFillTrophy />

                            </Col>
                            <Col>
                                <div style={{ marginLeft: '10px' }}>


                                    <h4>Period</h4>
                                    <h5>20220210208</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ marginLeft: '55px' }}>
                        <h4>Count Down</h4>
                        <h4 >02:49</h4>
                    </div>
                </div>


                <div style={{ display: "flex", justifyContent: 'center', borderRadius: "25px" }}>



                    <CardDiv id="tie" onClick={() => checkoutOrder('tie')} style={{
                        width: '58rem', backgroundColor: "green", borderRadius: "25px",
                        border: "5px solid #e4d00a", marginBottom: "5px"
                    }}><div className='main1' style={{ height: "1.5rem", borderRadius: "25px 26px 0px 0px", backgroundColor: "darkgreen", display: "flex", justifyContent: "space-between" }} >
                        </div>
                        <FontSize >TIE</FontSize>
                        <Card.Img variant="top" src="" />

                    </CardDiv>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardDiv id="andar" onClick={() => checkoutOrder('andar')} style={{
                        width: '29rem', borderRadius: "25px 25px 25px 180px", backgroundColor: "blue",
                        border: "5px solid #e4d00a", marginRight: "4px", marginBottom: "10px"
                    }}><div style={{ height: "1.5rem", borderRadius: "10px 10px 5px 4px", backgroundColor: "darkblue", display: "flex", justifyContent: "space-between" }}>
                        </div>
                        <FontSize >Andar</FontSize>
                        <Card.Img variant="top" src="" />

                    </CardDiv>
                    <CardDiv id="bahar" onClick={() => checkoutOrder('bahar')} style={{
                        width: '29rem', borderRadius: "25px 25px 180px 25px",
                        backgroundColor: "red",
                        border: "5px solid #e4d00a"
                    }}><div style={{ height: "1.5rem", borderRadius: "10px 10px 5px 0px", backgroundColor: "darkred", display: "flex", justifyContent: "space-between" }}>
                        </div>
                        <FontSize >Bahar</FontSize>
                        <Card.Img variant="top" src="" />

                    </CardDiv>
                </div>


            </div>

            <CoinDiv>
                <Container>
                    <CoinCnterDiv>
                        <div >
                            <img id='img10' src={coin10} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#AAA64D' }} alt='coin10' onClick={() => showDiv('10')} />
                        </div>
                        <div >
                            <img id="img100" src={coin1} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#F6B527' }} alt='coin1' onClick={() => showDiv('100')} />
                        </div>
                        <div >
                            <img id="img500" src={coin2} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#ED1F57' }} alt='coin2' onClick={() => showDiv('500')} />
                        </div>
                        <div >
                            <img id="img1000" src={coin3} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#BB4D9D' }} alt='coin3' onClick={() => showDiv('1000')} />
                        </div>


                        <div >
                            <img id="img10000" src={coin6} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#10B99D' }} alt='coin6' onClick={() => showDiv('10000')} />
                        </div>

                    </CoinCnterDiv>
                </Container>
            </CoinDiv>

            <ModalReadRule
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <ModalRupesSelect
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                value={valueRupess}
                cardValue={cardValue}
            />

            <ToastContainer />
        </>
    )
}

export default WinHeader


const CardDiv = styled.div`
margin: 0.4rem;
cursor:pointer;
height: 7rem;
@media screen and (min-width: 767px) {
    height: 10rem;
  }

`;

const FontSize = styled.div`
display: flex;
justify-content: center;
 align-items: center;
 color: gray;
 font-size: 40px;

 @media screen and (max-width: 426px) {
    font-size: 30px;
  }

`;

const CoinDiv = styled.div`
display: block;
`;

const CoinCnterDiv = styled.div`

display: grid; 
grid-template-columns: repeat(auto-fill, 70px); 
justify-items: center; 
grid-gap: 35px; 
padding: 1rem;
@media screen and (min-width: 968px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 440px) {
    grid-gap: 26px;
    margin-left:30px
  }

  @media screen and (max-width: 335px) {
    grid-gap: 20px;
  }

`
