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

app.get('/test',(req,res) => {
    res.json('test ok');
});

app.listen(4000);