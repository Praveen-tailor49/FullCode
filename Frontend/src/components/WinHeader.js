import React, { useState } from 'react'
import { BiRupee, BiRefresh } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';
import { Button, Container } from 'react-bootstrap';
// import ModalWin from './ModalWin';
import ModalReadRule from './ModalReadRule';
import { Link } from 'react-router-dom'
import coin1 from '../image/coins-img/coin-1.png'
import coin2 from '../image/coins-img/coin-2.png'
import coin3 from '../image/coins-img/coin-3.png'
import coin4 from '../image/coins-img/coin-4.png'
import coin5 from '../image/coins-img/coin-5.png'
import coin6 from '../image/coins-img/coin-6.png'
import coin7 from '../image/coins-img/coin-7.png'
import coin8 from '../image/coins-img/coin-8.png'
import coin10 from '../image/coins-img/coin-10.png'
// import custom from '../image/coins-img/coin-custom.png'
import card1 from '../image/cards/card-1.png'
import card2 from '../image/cards/card-2.png'
import card3 from '../image/cards/card-3.png'
import ModalRupesSelect from './ModalRupesSelect';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WinHeader = ({userBalance}) => {
    // const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [valueRupess, setValueRupess] = useState('');
    const [cardValue, setCardValue] = useState('');

   

    const showDiv = (val) => {

        if (val === 'A') {
            document.getElementById('A').style.boxShadow = '0px 0px 30px 2px  #2861C6';
        } else {
            document.getElementById('A').style.boxShadow = '1px 1px gray';
        }

        if (val === 'B') {
            document.getElementById('B').style.boxShadow = '0px 0px 30px 2px  #E0422D';
        } else {
            document.getElementById('B').style.boxShadow = '1px 1px gray';
        }

        if (val === 'T') {
            document.getElementById('T').style.boxShadow = '0px 0px 30px 2px  #1A7F14';
        } else {
            document.getElementById('T').style.boxShadow = '1px 1px gray';
        }

        setCardValue(val)
    }

    const showModal2 = (val) => {
        if (cardValue) {
            setModalShow2(true)
            setValueRupess(val)
        } else {
            toast.error('Please Select a Card First. From A/B/T', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
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

                    <div style={{ fontSize: '20px', marginLeft: '40px' }}>
                        <BiRefresh />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>
                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
                    <div>
                        <AiFillTrophy />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <h6>Period</h6>
                        <h4>20220210208</h4>
                    </div>

                    <div style={{ marginLeft: '55px' }}>
                        <h6>Count Down</h6>
                        <h4>02:49</h4>
                    </div>
                </div>

                <div style={{ display: 'flex', padding: '6px', justifyContent: 'center' }}>

                    <CardDiv onClick={() => showDiv('A')}>
                        <CardImg src={card2} alt='card1' id="A" />
                    </CardDiv>

                    <CardDiv onClick={() => showDiv('B')}>
                        <CardImg src={card1} alt='card2' id="B" />
                    </CardDiv>

                    <CardDiv onClick={() => showDiv('T')}>
                        <CardImg src={card3} alt='card3' id="T" />
                    </CardDiv>
                </div>
            </div>

            <CoinDiv>
                <Container>
                    <CoinCnterDiv>
                        <div >
                            <img src={coin10} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#AAA64D' }} alt='coin10'  onClick={() => showModal2('10')} />
                        </div>
                        <div >
                            <img src={coin1} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#F6B527' }} alt='coin1' onClick={() => showModal2('100')} />
                        </div>
                        <div >
                            <img src={coin2} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#ED1F57' }} alt='coin2' onClick={() => showModal2('500')} />
                        </div>
                        <div >
                            <img src={coin3} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#BB4D9D' }} alt='coin3' onClick={() => showModal2('1000')} />
                        </div>
                        <div >
                            <img src={coin4} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#7153A3' }} alt='coin4' onClick={() => showModal2('3000')} />
                        </div>
                        <div >
                            <img src={coin5} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#443292' }} alt='coin5' onClick={() => showModal2('5000')} />
                        </div>
                        <div >
                            <img src={coin6} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#10B99D' }} alt='coin6' onClick={() => showModal2('10000')} />
                        </div>
                        <div >
                            <img src={coin7} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#6CBD45' }} alt='coin7' onClick={() => showModal2('20000')} />
                        </div>
                        <div >
                            <img src={coin8} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#E16926' }} alt='coin8' onClick={() => showModal2('30000')} />
                        </div>

                        {/* <div >
                            <img src={custom} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#AAA64D' }} alt='coin8' onClick={() => setModalShow(true)} />
                        </div> */}

                    </CoinCnterDiv>
                </Container>
            </CoinDiv>

            {/* <ModalWin
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}

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
margin: 1rem;
cursor:pointer;

`;

const CardImg = styled.img`
box-shadow: 1px 1px gray;
width: 5rem; 
border-radius: 0.5rem;

@media screen and (min-width: 768px) {
    width: 12rem; 
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
