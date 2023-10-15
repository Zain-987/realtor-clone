const express = require("express")
const router = require("./Routes/UserRouter")
const cors = require("cors")
const ConnectToMongo = require("./Configurations/Connect")
const app = express()

ConnectToMongo()

app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your client application
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable credentials support
  }));
app.use(express.json())


app.use("/api/v1/",router)

// Error Handler
app.use((error , req , res , next)=>{

    let status = 500
    const data = {message : "Internal Server Error !"}

    if(error.status){
        status = error.status
    }

    if(error.message){
        data.message = error.message
    }

    return res.status(status).json(data)
})

app.listen(3003,console.log("Server is Running ! "))