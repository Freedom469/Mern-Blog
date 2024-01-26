import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || password === "" || password === "") {
        next(errorHandler(400, 'All fields are required'));
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
        next(error);
    }
    
}