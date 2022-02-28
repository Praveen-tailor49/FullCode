import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Win from './pages/Win';
import MinePage from './pages/MinePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ResetPassword  from './pages/ResetPassword';
import AddAddress from './pages/AddAddress';
import AddBankCard from './pages/AddBankCard';
import Withdrawal from './pages/Withdrawal';
import Orders from './pages/Orders';
import ComplaintsSuggestions from './pages/ComplaintsSuggestions';
import Promotion from './pages/Promotion';
import Transactions from './pages/Transactions';
import RiskDisclosureAgreement from './pages/RiskDisclosureAgreement';
import Recharge from './pages/Recharge';
import AuthUser from "./AuthUser";
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import UserManagement from './adminPages/UserManagement';
import Pages from './adminPages/Pages';
import WinTwo from './pages/WinTwo';
import Payment from './pages/Payment';
import Error404 from './pages/Error404';
import Order from './adminPages/Order';
import GameResult from './adminPages/GameResult';
import GameRules from './adminPages/GameRules';
import Payments from './adminPages/Payment';
import GameTC from './adminPages/GameTC';
import Promotions from './adminPages/Promotions';
import Wallet from './adminPages/Wallet'
import Tickets from './adminPages/Tickets'
import Gamesetting from './adminPages/Gamesetting'
import Ticket from './pages/Ticket';
// import AdminLogin from './adminPages/AdminLogin'

function App() {

  const baseUrl = 'http://localhost:5000/';

  return (
    <>
      <Routes>
          <Route exact path='/' element={<Login baseUrl={baseUrl}/>}/>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/Win2' element={<WinTwo/>}/>
          <Route exact path='/register' element={<Register baseUrl={baseUrl}/>}/>
          <Route path='/reset/password' element={<ResetPassword/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/win' element={<Win />}/>
          <Route path='/mine' element={<MinePage/>}/>
          <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>
          <Route path='/add/address' element={<AddAddress/>}/>
          <Route path='/add/bank' element={<AddBankCard/>}/>
          <Route path='/withdrawal' element={<Withdrawal/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/ComplaintsSuggestions' element={<ComplaintsSuggestions/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/RiskDisclosure' element={<RiskDisclosureAgreement/>}/>
          <Route path='/recharge' element={<Recharge/>}/>
          <Route path='/payment' element={<Payment/>}/> */}


          {/* Admin pages */}

          <Route path='/admin' element={<AdminPage baseUrl={baseUrl}/>}/>
          <Route path='/user/management' element={<UserManagement baseUrl={baseUrl}/>}/>
          <Route path='/user/pages' element={<Pages baseUrl={baseUrl}/>}/>
          <Route path='/Promotions' element={<Promotions baseUrl={baseUrl}/>}/>
          <Route path='/Order' element={<Order baseUrl={baseUrl}/>}/>
          <Route path='/GameResult' element={<GameResult baseUrl={baseUrl}/>}/>
          <Route path='/GameRules' element={<GameRules baseUrl={baseUrl}/>}/>
          <Route path='/payments' element={<Payments baseUrl={baseUrl}/>}/>
          <Route path='/GameTC' element={<GameTC baseUrl={baseUrl}/>}/>
          <Route path='/user/wallet' element={<Wallet  baseUrl={baseUrl}/>}/>
          <Route path='/admin/ticket' element={<Tickets  baseUrl={baseUrl}/>}/>
          <Route path='/admin/gamesettings' element={<Gamesetting  baseUrl={baseUrl}/>}/>
          



          {/* User Auth */}

          <Route path='/win' element={<AuthUser cmp={Win} />}/>
          <Route path='/mine' element={<AuthUser cmp={MinePage} baseUrl={baseUrl}/>}/>
          <Route path='/privacy/policy' element={<AuthUser cmp={PrivacyPolicy}/>}/>
          {/* <Route path='/reset/password' element={<AuthUser cpm={ResetPassword}/>}/> */}
          <Route path='/add/address' element={<AuthUser cmp={AddAddress}/>}/>
          <Route path='/add/bank' element={<AuthUser cmp={AddBankCard}/>}/>
          <Route path='/withdrawal' element={<AuthUser cmp={Withdrawal}/>}/>
          <Route path='/orders' element={<AuthUser cmp={Orders}/>}/>
          <Route path='/ComplaintsSuggestions' element={<AuthUser cmp={ComplaintsSuggestions}/>}/>
          <Route path='/promotion' element={<AuthUser cmp={Promotion}  baseUrl={baseUrl}/>}/>
          <Route path='/transactions' element={<AuthUser cmp={Transactions}/>}/>
          <Route path='/RiskDisclosure' element={<AuthUser cmp={RiskDisclosureAgreement}/>}/>
          <Route path='/recharge' element={<AuthUser cmp={Recharge}/>}/>
          <Route path='/payment' element={<AuthUser cmp={Payment}/>}/>
          <Route path='/user/ticket' element={<Ticket/>}/>
      </Routes>
        
    </>
  );
}

export default App;
