const express = require("express")
const validToken = require("../MIDDLEWARE/authMiddleware")
const { getCustomers, addCustomer, deleteCustomer,updateCustomer} = require("../controller/customerController")

const customerRouter = express.Router()


customerRouter.get("/", validToken, getCustomers)      
customerRouter.post("/", validToken, addCustomer)     
customerRouter.delete("/:id", validToken, deleteCustomer)
customerRouter.put("/:id", validToken, updateCustomer)

module.exports = customerRouter