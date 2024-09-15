const express =require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://blog:PCYlMaeV9eAfW3in@cluster0.itjwf.mongodb.net/')

app.post('/register', (req,res) =>{
    const {username, password} = req.body;
    res.json({requestData:{username, password}})

})

app.listen(4000);
//mongodb+srv://<db_username>:<PCYlMaeV9eAfW3in>@cluster0.itjwf.mongodb.net/
//PCYlMaeV9eAfW3in