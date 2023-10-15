const express = require("express")
const router = require("./Routes/UserRouter")
const ConnectToMongo = require("./Configurations/Connect")
const app = express()

ConnectToMongo()
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