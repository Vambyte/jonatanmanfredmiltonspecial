import { APIResponse } from "../../interfaces/api-response";
import { CheckTokenStatus } from "../../services/user/data"

module.exports.checkTokenStatus = function (req: any, res: any) {
    const token = req.headers.authorization.split(" ")[1];
    CheckTokenStatus(token)        
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
