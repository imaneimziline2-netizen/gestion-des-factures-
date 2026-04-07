import User from "../models/userModele.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import createUser from "../validator/userValidator.js";
export async function registerService(req, res) {
    const { name, email, password } = req.body;

    const errors = createUser.validate({ email, password, email });

    console.log(errors);
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );
    const safeUser = await User.findById(user._id).select("-password");

    res.json({
        user: safeUser,
        token,
    });
}

export async function loginService(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", token });
}

export async function myProfile(req, res) {
    try {
        const user = await User.find({ _id: req.user.userId }).select(
            "-password",
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
