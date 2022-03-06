import { APIResponse } from "../../interfaces/api-response";
import { UserModel } from "../../models/user";

import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");

export {};

module.exports = async function (req: any, res: any) {
    await UserModel.find({ email: req.body.email }).exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json(<APIResponse>({
                status: 401,
                success: false,
                code: "ERROR",
                msg: "Could not log in",
                data: null
            }));
        }

        bcrypt.compare(req.body.password, user[0].password, (err, response) => {
            if (err) {
                return res.status(401).json(<APIResponse>({
                    status: 401,
                    success: false,
                    code: "ERROR",
                    msg: "Could not log in",
                    data: null
                }));
            }

            if (res) {
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: "1h"
                });

                return res.status(200).json(<APIResponse>({
                    status: 200,
                    success: true,
                    code: "OK",
                    msg: "Logged in successfully",
                    data: { 
                        user: {
                            email: user[0].email
                        },
                        token: token 
                    }
                }));
            }

            return res.status(401).json(<APIResponse>({
                status: 401,
                success: false,
                code: "ERROR",
                msg: "Could not log in",
                data: null
            }));
        });
    }).catch(err => {
        return res.status(500).json(<APIResponse>({
            status: 500,
            success: false,
            code: "ERROR",
            msg: "Could not log in",
            data: null
        }));
    });
}