import { APIResponse } from "../../interfaces/api-response";
import { Signup } from "../../services/user/authentication";

export {};

module.exports = async function (req: any, res: any) {

    Signup(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
    
}