import {
    registerService,
    loginService,
    myProfile,
} from "../services/authService.js";

async function registerController(req, res) {
    const user = await registerService(req, res);
    res.status(201).json({ status: "success", user });
}

async function loginController(req, res) {
    try {
        const user = await loginService(req, res);
        return res.status(200).json({ status: "success", user });
    } catch (error) {
        res.status(401).json({ status: "error", message: error.message });
    }
}

async function myProfileController(req, res) {
    const user = await myProfile(req, res);
    return res.status(200).json({ status: "success", user });
}
export { registerController, loginController, myProfileController };
