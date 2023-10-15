const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const USERDTO = require("../DTO/USERDTO")
const UserModel = require("../Models/UserModel")
const { SECRET_KEY } = require("../Configurations/config")

const registerUser = async (req , res , next) => {
    try{

        const {username , email , password} = req.body


        // Check if User Already Exists 
        const isUserExists = await UserModel.exists({email})


        if(isUserExists){
            return next({
                status : 409, 
                message : "User Already Exists ! "
            })
        }


        // Hashing the Password
        
        const hashedPassword = bcrypt.hashSync(password , 10)
        
        
        const user = await UserModel.create({
            username , email , password : hashedPassword
        })
        
        

        const userDto = new USERDTO(user)

        return res.status(201).json({user : userDto , auth : true})
    }catch(error){
        console.log(error.message);
        return next(error)
    }
}
const loginUser = async (req , res , next) => {
    try{

        const {email , password} = req.body


        const isUserExists = await UserModel.findOne({email})


        if(!isUserExists){
            return next({
                status : 400, 
                message : "No User Exists ! "
            })
        }

        
        const isPassowrdOkay = await bcrypt.compare(password , isUserExists.password)
        
        if(!isPassowrdOkay){
            return next({
                status : 403, 
                message : "Invalid Credentials ! "
            })
        }
        
        
        
        
        // Creating jwt Tokens 
        
        const token = jwt.sign({payload : isUserExists._id} , SECRET_KEY)
        
        res.cookie("auth" , token , {httpOnly : true})
        
        

        let userDto = new USERDTO(isUserExists)

        return res.status(200).json({user : userDto , auth : true})

    }catch(error){
        return next(error)
    }
}


module.exports = {
    registerUser , loginUser
}