require('dotenv').config()
const connectDB = require('./DB/Connection')
const cors = require("cors")
const express = require('express')
const authRouter = require('./Routes/router')
const customerRouter=require('./Routes/customerRouter')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use("/api/customers", customerRouter)






connectDB()
app.listen(5000, () => {
    console.log("Server started on port 5000")
})

