import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || password === "" || password === "") {
        return res.status(400).json({message: 'All fields are required'});
    }

    const hashedpswd = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedpswd,
    });

    try {
        await newUser.save();
        res.json({message: "Signup successfuly"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}