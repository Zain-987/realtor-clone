const express = require("express")
const { registerUser, loginUser } = require("../Contollers/UserController")

const app = express.Router()

app.post("/register" , registerUser)
app.post("/login" , loginUser)

module.exports = app