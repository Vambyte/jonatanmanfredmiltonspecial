import { APIResponse } from "../../interfaces/api-response";
import { UserModel } from "../../models/user";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const jwt = require("jsonwebtoken");

export async function GetCurrentUser(reqData: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        await UserModel.find({ email: reqData.email }).exec()
        .then(user => {
            if (user.length < 1) {
                return reject(<APIResponse>({
                    status: 401,
                    success: false,
                    code: "ERROR",
                    msg: "Could not log in",
                    data: null
                }));
            }

            bcrypt.compare(reqData.password, user[0].password, (err: any, response: any) => {
                if (err) {
                    return reject(<APIResponse>({
                        status: 401,
                        success: false,
                        code: "ERROR",
                        msg: "Could not log in",
                        data: null
                    }));
                }

                if (response) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: "1h"
                    });

                    return resolve(<APIResponse>({
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

                return reject(<APIResponse>({
                    status: 401,
                    success: false,
                    code: "ERROR",
                    msg: "Could not log in",
                    data: null
                }));
            });
        }).catch(err => {
            return reject(<APIResponse>({
                status: 500,
                success: false,
                code: "ERROR",
                msg: "Could not log in",
                data: null
            }));
        });
    });
}