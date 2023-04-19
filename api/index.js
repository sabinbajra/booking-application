const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

mongoose.connect(process.env.MONGO_URL);

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
            res.cookie('token','').json("Password does match");

        }
        else {
            res.status(422).json("Password does not match");
        }
    }
    else{
        res.json('Not Found');
    }
    
});


app.get('/test',(req,res) => {
    res.json('test ok');
});

app.listen(4000);