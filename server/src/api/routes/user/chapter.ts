import { APIResponse } from "../../interfaces/api-response";
import { GetChapterInfo, SetCurrentChapter, SetCurrentPart } from "../../services/user/chapter";

export {};

module.exports.getChapterInfo = async function(req: any, res: any) {
    GetChapterInfo(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

module.exports.setCurrentChapter = async function(req: any, res: any) {
    SetCurrentChapter(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

module.exports.setCurrentPart = async function(req: any, res: any) {
    SetCurrentPart(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}