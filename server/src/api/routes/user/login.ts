import { APIResponse } from "../../interfaces/api-response";
import { Login } from "../../services/user/authentication";

export {};

module.exports = async function (req: any, res: any) {
    
    Login(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}