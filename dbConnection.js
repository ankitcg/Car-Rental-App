const mongoose = require("mongoose") ;
const connectToDb =()=>{
    try {
        mongoose.connect(config.get("mongoURI"));
        console.log("Connected to Db Successfully")
    } catch (error) {
        console.log("Db is Not Connected")
    }
}

module.exports = connectToDb;






// const express = require
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//       app.listen(process.env.PORT, () => {       
//           console.log("successfully connected to db and listening to the server on port " + process.env.PORT + "!!!")
//       })
//   })
//   .catch((error) => {
//       console.log(error)
//   })