const express =require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const User = require('./models/User')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://stanxlin:mJJVrAkWPZGmEzWS@blog.0n1rb.mongodb.net/?retryWrites=true&w=majority&appName=Blog');

app.post('/register', async (req,res) =>{
    const {username, password} = req.body;
    const userDoc = await User.create({username, password})
    res.json(userDoc)

})

app.listen(4000);
//mongodb+srv://<db_username>:<PCYlMaeV9eAfW3in>@cluster0.itjwf.mongodb.net/
//PCYlMaeV9eAfW3in