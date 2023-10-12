const express = require("express")

const app = express()

app.get("/",(req, res)=>{
    res.send("Got it !")
})
app.listen(3003,console.log("Server is Running ! "))