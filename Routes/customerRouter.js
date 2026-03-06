const express = require("express");
const validToken = require("../MIDDLEWARE/authMiddleware");
const {
  getCustomers,
  addCustomer,
  deleteCustomer,
  updateCustomer
} = require("../controller/customerController");

const customerRouter = express.Router();

// RESTful routes
customerRouter.get("/", validToken, getCustomers);         // GET all
customerRouter.post("/", validToken, addCustomer);         // POST new
customerRouter.delete("/:id", validToken, deleteCustomer); // DELETE by ID
customerRouter.put("/:id", validToken, updateCustomer);    // UPDATE by ID

module.exports = customerRouter;