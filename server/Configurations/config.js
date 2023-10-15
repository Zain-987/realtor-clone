const dotenv = require("dotenv").config()


const MONGO_STRING = process.env.MONGO_STRING
const SECRET_KEY = process.env.SECRET_KEY


module.exports = {
    MONGO_STRING , SECRET_KEY
}