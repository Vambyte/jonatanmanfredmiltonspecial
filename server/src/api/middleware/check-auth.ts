import { APIResponse } from "../interfaces/api-response";

const jwt = require("jsonwebtoken");

export const checkAuthenticated = (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;

        // Look up user in database and check token??

        next();
    }
    catch (err) {
        return res.status(409).json(<APIResponse>({
            status: 409,
            success: false,
            code: "ERROR_TOKEN",
            msg: "Could not authenticate",
            data: null
        }));
    }
}

export const checkNotAuthenticated = (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return res.redirect("/");
    }
    catch (err) {
        next();
    }
}