const express = require('express');
const app = express();
const config = require('config');
const connectToDb = require('./db');
const userRoute = require('./route/user');
const authRoute = require('./route/auth');
const carRoute = require('./route/car');

connectToDb();

app.use(express.json());

app.use('/api/v1/user',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/car',carRoute);

app.use('/',(req,res)=>{
    res.send('Server Side');
})

app.listen(config.get('port'),(err)=>{
    if(err){
        return console.log('Not Connected To Port')
    }
    console.log('Connected To Port On 8080');
})