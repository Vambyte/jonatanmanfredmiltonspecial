export {};

import { APIResponse } from "../../../interfaces/api-response";
import { RetrieveChapter, RetrieveImage, SetQuestions, GetQuestions, AddChapterTest, RemoveChapterTest } from "./../../../services/Chapter";

module.exports.getContent = async function (req: any, res: any) {
    res.setHeader("Content-Type", "text-html");

    RetrieveChapter(req.body.chapter, req.body.part)
        .then((content: any) => res.status(201).send(content))
        .catch((err: any) => res.status(500).send(err));
}

module.exports.getImage = async function (req: any, res: any) {
    res.setHeader("Content-Type", "image/jpg");

    RetrieveImage(req.body.chapter, req.body.image)
    .then((content: any) => res.status(201).send(content))
    .catch((err: any) => res.status(500).send(err));
}


module.exports.addChapterTest = async function(req: any, res: any) {
    AddChapterTest(req.body.chapter)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

module.exports.removeChapterTest = async function(req: any, res: any) {
    RemoveChapterTest(req.body.chapter)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

module.exports.setQuestions = async function(req: any, res: any) {
    SetQuestions(req.body)
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

module.exports.getQuestions = async function(req: any, res: any) {
    GetQuestions()
        .then((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse))
        .catch((apiResponse: APIResponse) => res.status(apiResponse.status).json(apiResponse));
}

