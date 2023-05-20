// require("dotenv").config() 

// const express = require("express")
// const mongoose = require("mongoose") 
// const userRouter = require('./routes/user')
// const adminRouter = require('./routes/admin')
// const  carRouter = require('./routes/Car')

// //express app
// const app = express()


// //middleware
// app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path,req.method)
//     next()
// })

// //connnect to db
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     app.listen(process.env.PORT, () => {       
//         console.log("successfully connected to db and listening to the server on port 4000 !!!")
//     })
// })
// .catch((error) => {
//     console.log(error)
// })

// app.use('/carRental/car',carRouter)
// app.use('/carRental/admin' ,adminRouter)
// app.use('/carRental/user' ,userRouter)


// require("dotenv").config() 

const express = require("express")

const mongoose = require("mongoose") 
const  carRouter = require('./routes/Car')
const connectToDb= require('./dbConnection')
 const config = require('config');

//express app
const app = express()

connectToDb();
//middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})



app.use('/carRental/car',carRouter)

app.listen(config.get("port"),(error)=>{
    if(error){
       return console.log(error);
    }
    console.log("server is running on port 8080")
})





