var http = require('http')
const express =  require ('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'game',
});

app.post('/signUp', (req, res) => {

    const {userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete } = req.body

    db.query(`INSERT INTO users (userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?)`,
    [userName, userMobile, userNickName, userPassword, userReCode, userBalance, userStatus, userDelete],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/userLogin', (req, res) => {
    const { userMobile, userPassword } = req.body;
    
    db.query(
        `SELECT * FROM users WHERE userMobile='${userMobile}' AND userPassword='${userPassword}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Mobile number and Password is wrong');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/user/resetPassword', (req, res) => {

    const {userId, userPassword, userMobile} = req.body

    db.query(
        `UPDATE  users SET userPassword='${userPassword}'  WHERE userId='${userId}' AND userMobile  = '${userMobile}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/blankDetails', (req, res) => {

    const {userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete } = req.body

    db.query(`INSERT INTO bankdetails (userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/addressDetails', (req, res) => {

    const {userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus } = req.body

    db.query(`INSERT INTO useraddress (userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus) VALUES (?,?,?,?,?,?,?,?,?)`,
    [userId, fullName, mobileNumber, pinCode, state, city, detaileAddress, status, deleteStatus],
    (err, result) => {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json({mess:'Successfully'});
        }
    }
)
})

app.post('/showBankDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `SELECT * FROM bankdetails WHERE userId='${userId}' AND userDelete=1`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Not add Bank Account ');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/showAddressDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `SELECT * FROM useraddress WHERE userId='${userId}' AND deleteStatus=1`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Not add Address ');
            } else if(result.length === 1) {
                res.status(200).json({mess:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/showUser', (req, res) => {
    db.query(
        `SELECT * FROM users WHERE userDelete='1'`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.post('/remove/AddressDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `UPDATE  useraddress SET deleteStatus='0' WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/remove/BankDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `UPDATE  bankdetails SET userDelete='0' WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/remove/UserDetails', (req, res) => {

    const {userId} = req.body

    db.query(
        `DELETE FROM  users  WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

// user

app.post('/show/user/Promo', (req, res) => {
    db.query(
        `SELECT * FROM promo  WHERE promoStatus='Enable'`,
        (err, result) => {
            return res.json(result);
        }
    )
})


//Surbhi's work


app.post('/aboutpage', (req, res) => {

    const { aboutContent} = req.body;
    db.query(`INSERT INTO aboutpage (aboutContent) VALUES (?)`,
        [aboutContent],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.get('/show/about', (req, res) => {
    db.query(
        `SELECT * FROM aboutpage`,
        (err, result) => {
            return res.json(result);
        }
    )
})


app.post('/update/about/page', (req, res) => {

    const {pageId,aboutContent} = req.body

    db.query(
        `UPDATE  aboutpage SET aboutContent='${aboutContent }' WHERE Id='${pageId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/termspage', (req, res) => {

    const { termsContent } = req.body;
    db.query(`INSERT INTO termspage (termsContent) VALUES (?)`,
        [termsContent],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.get('/show/terms', (req, res) => {
    db.query(
        `SELECT * FROM termspage`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.post('/update/terms/page', (req, res) => {

    const {termsId,termsContent} = req.body

    db.query(
        `UPDATE  termspage SET termsContent='${termsContent }' WHERE Id='${termsId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/privacypage', (req, res) => {

    const { privacyContent } = req.body;
    db.query(`INSERT INTO privacypage (privacyContent) VALUES (?)`,
        [privacyContent],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.get('/show/privacy', (req, res) => {
    db.query(
        `SELECT * FROM privacypage`,
        (err, result) => {
            return res.json(result);
        }
    )
})


app.post('/update/privacy/page', (req, res) => {

    const {privacyId,privacyContent} = req.body

    db.query(
        `UPDATE  privacypage SET privacyContent='${privacyContent }' WHERE Id='${privacyId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/rolepage', (req, res) => {

    const { roleContent } = req.body;
    db.query(`INSERT INTO rolepage (roleContent) VALUES (?)`,
        [roleContent],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.get('/show/role', (req, res) => {
    db.query(
        `SELECT * FROM rolepage`,
        (err, result) => {
            return res.json(result);
        }
    )
})


app.post('/update/role/page', (req, res) => {

    const {roleId,roleContent} = req.body

    db.query(
        `UPDATE  rolepage SET roleContent='${roleContent }' WHERE Id='${roleId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/promo', (req, res) => {

    const { promoCode, promoDes, validity, promoStatus } = req.body;
    db.query(`INSERT INTO promo (promoCode, promoDes, validity, promoStatus) VALUES (?,?,?,?)`,
        [promoCode, promoDes, validity, promoStatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/show/admin/Promo', (req, res) => {
    db.query(
        `SELECT * FROM promo`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/edit/promotion', (req, res) => {
    const {promoId,promoCode, promoDes, validity, promoStatus} = req.body
    db.query(
        `UPDATE  promo SET promoCode='${promoCode}', promoDes='${promoDes}', validity='${validity}', promoStatus='${promoStatus}' WHERE Id='${promoId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/remove/promotion', (req, res) => {
    const {Id} = req.body
    db.query(
        `DELETE FROM  promo WHERE Id='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/orders', (req, res) => {

    const { userId, userName, time, Period, cardtype, amount } = req.body;
    db.query(`INSERT INTO orders (userId, userName, time, Period, cardtype, amount) VALUES (?,?,?,?,?,?)`,
        [userId, userName, time, Period, cardtype, amount],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/showOrder', (req, res) => {
    db.query(
        `SELECT * FROM orders`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/remove/admin/order', (req, res) => {
    const {Id} = req.body
    db.query(
        `DELETE FROM  orders WHERE Id='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})



app.post('/result', (req, res) => {

    const { record, result } = req.body;
    db.query(`INSERT INTO result (record, result) VALUES (?,?)`,
        [record, result],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/showResult', (req, res) => {
    db.query(
        `SELECT * FROM result`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/updateResult', (req, res) => {
    const { resultID, record, updateResult } = req.body;
    console.log(resultID);
    
    db.query(
        `UPDATE result SET record= '${record}', result='${updateResult}' WHERE Id='${resultID}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})


app.post('/rules', (req, res) => {

    const { rules } = req.body;
    db.query(`INSERT INTO rules (rules) VALUES (?)`,
        [rules],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.get('/showRules', (req, res) => {
    db.query(
        `SELECT * FROM rules`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/update/rule/page', (req, res) => {

    const {rules,Id} = req.body

    db.query(
        `UPDATE  rules SET rules='${rules }' WHERE Id ='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/takec', (req, res) => {

    const { takec, tstatus } = req.body;
    db.query(`INSERT INTO takec (takec, tstatus) VALUES (?,?)`,
        [takec, tstatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
}) 

app.post('/add/adminPayment', (req, res) => {

    const {  paymentHeading, paymentContent, paymentImage, status, dateTime,showImga } = req.body;
    db.query(`INSERT INTO payment (paymentHeading, paymentContent, paymentImage, status, dateTime,showImga) VALUES (?,?,?,?,?,?)`,
        [paymentHeading, paymentContent, paymentImage, status, dateTime,showImga],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/show/admin/Payment', (req, res) => {
    db.query(
        `SELECT * FROM payment`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/remove/admin/paymentDetails', (req, res) => {
    const {Id} = req.body
    db.query(
        `DELETE FROM  payment WHERE Id='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/edit/admin/paymentDetails', (req, res) => {
    const { Id, paymentHeading, paymentContent, paymentImage, status, showImga} = req.body
    db.query(
        `UPDATE  payment SET paymentHeading='${paymentHeading}', paymentContent='${paymentContent}', paymentImage='${paymentImage}', status='${status}',showImga='${showImga}' WHERE Id='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/user/tickets', (req, res) => {

    const { userId, name, email, phone, subject, message, status } = req.body;
    db.query(`INSERT INTO tickets (userId, name, email, phone, subject, message, status) VALUES (?,?,?,?,?,?,?)`,
        [userId, name, email, phone, subject, message, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/show/admin/Ticket', (req, res) => {
    
    db.query(
        `SELECT * FROM tickets `,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/show/user/Ticket', (req, res) => {
    const {userId} = req.body
    db.query(
        `SELECT * FROM tickets WHERE userId='${userId}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/remove/admin/userTickets', (req, res) => {

    const {Id} = req.body

    db.query(
        `DELETE FROM  tickets  WHERE userId='${Id}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/edit/admin/ticketDetails', (req, res) => {
    const { ticketId, name, email, phone, subject, message, status} = req.body
    db.query(
        `UPDATE  tickets SET name='${name}', email='${email}', phone='${phone}', status='${status}', subject='${subject}', message='${message}'  WHERE Id='${ticketId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/wallet', (req, res) => {

    const { userId, startBal, closeBal, dateTime } = req.body;
    db.query(`INSERT INTO wallet (userId, startBal, closeBal, dateTime) VALUES (?,?,?,?)`,
        [userId, startBal, closeBal, dateTime],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/gamesettings', (req, res) => {

    const { A, Lower, O } = req.body;
    db.query(`INSERT INTO gamesettings (A, Lower, O) VALUES (?,?,?)`,
        [A, Lower, O],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/admin', (req, res) => {

    const { userName, password, status } = req.body;
    db.query(`INSERT INTO admin (userName, password, status) VALUES (?,?,?)`,
        [userName, password, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/edit/adminUser', (req, res) => {

    const {userId, userName, userMobile, userNickName, userPassword, userReCode, userBalance} = req.body

    db.query(
        `UPDATE  users SET userName='${userName}', userMobile='${userMobile}', userNickName='${userNickName}', userPassword='${userPassword}', userReCode='${userReCode}', 
        userBalance='${userBalance}' WHERE userId='${userId}'`,
        (err, result) => {
            if(result) {
                res.status(200).json({mess:'Successfully'});
            }else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/showUserAdmin', (req, res) => {

    const {userId} = req.body
    console.log(userId);
    db.query(
        `SELECT * FROM users WHERE userId = ${userId}`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/showAddressAdmin', (req, res) => {

    const {userId} = req.body
    console.log(userId);  
    db.query(
        `SELECT * FROM useraddress WHERE userId = ${userId} AND deleteStatus = '1'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/showBankAdmin', (req, res) => {

    const {userId} = req.body
    console.log(userId);
    db.query(
        `SELECT * FROM bankdetails WHERE userId = ${userId} AND userDelete ='1'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/adminLogin', (req, res) => {
    const { email, password } = req.body;

    if(email === '' || password === ''){
        res.send('empty feild ')
    } else if(email === 'admin123@gmail.com' && password === 'admin123'){
        res.send('Successfully')
    } else (
        res.send('user not found')
    )
})

app.listen(5000, () => console.log('server is run on 5000'))