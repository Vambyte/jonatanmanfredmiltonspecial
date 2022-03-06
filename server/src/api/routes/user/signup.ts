export {};

import mongoose from "mongoose";
import { UserModel } from "./../../models/user";
import bcrypt from "bcrypt";
import { APIResponse } from "./../../interfaces/api-response"

module.exports = async function (req: any, res: any) {

    UserModel.find({email: req.body.email}).exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(409).json(<APIResponse>({
                    status: 409,
                    success: false,
                    code: "ERROR",
                    msg: "Account already exists",
                    data: null
                }));
            } else {
                
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json(<APIResponse>({
                            status: 500,
                            success: false,
                            code: "ERROR",
                            msg: "Account could not be created",
                            data: null
                        }));
                    } else {
                        const user = new UserModel({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
            
                        user.save()
                        .then((result: any) => {
                            res.status(201).json(<APIResponse>({
                                status: 201,
                                success: true,
                                code: "OK",
                                msg: "Account created",
                                data: null
                            }));
                        })
                        .catch((err: any) => {
                            res.status(500).json(<APIResponse>({
                                status: 500,
                                success: false,
                                code: "ERROR",
                                msg: "Account could not be created",
                                data: null
                            }));
                        });
            
                    }
                });
            }
        }
    );

    

    
}