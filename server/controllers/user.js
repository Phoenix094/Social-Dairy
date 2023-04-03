import bcrypt from 'bcryptjs';
import jwt from 'json-web-token'

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.staus(404).json({ message: "User doesn't exist Try SignUp" })

        const isPasswordCorrect = bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Password is not Correct' });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.staus(500).json({ message: 'Something went Wrong' })
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.staus(404).json({ message: "User exists Try SignIn" })

        const hashPassword = await bcrypt.hash(password, 14);

        const result = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}` })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result, token })
    } catch (error) {
        res.staus(500).json({ message: 'Something went Wrong' })
    }

}