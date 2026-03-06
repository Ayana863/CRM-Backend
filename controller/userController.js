
const users = require('../MODEL/userModel')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Register
const userRegister = async (req, res) => {
    try {

        const { name, email, password } = req.body

        const userExist = await users.findOne({ email })

        if (userExist) {
            return res.status(400).json({ message: "User already exists" })
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const newUser = new users({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({
            success: true,
            message: "User registered successfully"
        })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}
// Login

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await users.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        )

        res.json({ token })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}

module.exports = { userRegister, loginUser }