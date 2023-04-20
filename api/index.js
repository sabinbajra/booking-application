const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser');
const cookieParser = require('cookie-parser');


const jwtSecret = "alkjsdflkasdjf345kjasfd";

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

mongoose.connect(process.env.MONGO_URL);

//for user registration
app.post('/register',async (req,res) => {
    const { name, email, password } = req.body;
    try{
        const userDoc = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password,bcryptSalt),
        });
        res.json({userDoc});
    }
    catch(error){
        res.status(422).json(error);
    }
});

//for user login
app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const userDoc = await UserModel.findOne({email});

    if(userDoc){
    //check the password is correct or not
    const passwordOk = bcrypt.compareSync(password, userDoc.password);   
        if(passwordOk)
        {
            jwt.sign({
                email: userDoc.email, 
                id: userDoc._id 
                }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token',token).json(userDoc);
                });
            
        }
        else {
            res.status(422).json("Password does not match");
        }
    }
    else{
        res.json('Not Found');
    }
    
});

app.get('/profile',(req,res) => {
    const {token} = req.cookies;
    if(token)
    {
        //decrypt the token
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if(err) throw err;
            const {name,email,_id} = await UserModel.findById(userData.id);
            res.json({name,email,_id});

        });

    }else{
        res.json(null);
    }
 
});

app.get('/test',(req,res) => {
    res.json('test ok');
});

app.listen(4000);
