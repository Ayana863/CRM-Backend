const mongoose = require("mongoose")

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.CONNECTION_STRING)

        console.log("MongoDB connected successfully")

    } catch (err) {

        console.log("Connection failed")
        console.log(err)

    }

}

module.exports = connectDB