import { APIResponse } from "../../interfaces/api-response";
const jwt = require("jsonwebtoken")

// Same function as checkAuthenticated (check-auth.ts)
export async function CheckTokenStatus(token: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            return resolve(<APIResponse>({
                status: 200,
                success: true,
                code: "OK",
                msg: "",
                data: null
            }));
        } catch(err) {
            return reject(<APIResponse>({
                status: 200,
                success: false,
                code: "ERROR_TOKEN",
                msg: "",
                data: null
            }));
        }
    });
}