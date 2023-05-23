
require("dotenv").config() 

const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose") 
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const  carRouter = require('./routes/Car')

//express app
const app = express()


//middleware
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT, () => {       
        console.log("successfully connected to db and listening to the server on port " + process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

app.use('/api/v1/car',carRouter)
app.use('/api/v1/admin' ,adminRouter)

app.use('/api/v1/user' ,userRouter)







