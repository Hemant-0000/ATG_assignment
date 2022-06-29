import { response } from "express";
import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            response.status(200).json({success: false, error: "User already exists with this mail"})
        }else{
            const { firstName, lastName, email, password } = req.body
            let u = new User({ firstName, lastName, email, password: CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString() })
            await u.save()
            res.status(200).json({ success: true })
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler)