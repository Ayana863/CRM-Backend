const express=require('express')
const {userRegister,loginUser}=require('../controller/userController')

const authRouter=express.Router()

authRouter.post('/register',userRegister)

authRouter.post('/login',loginUser)

module.exports=authRouter