export {};

import { RetrieveChapter, RetrieveImage } from "./../../../services/Chapter";

module.exports.getContent = async function (req: any, res: any) {
    res.setHeader("Content-Type", "text-html");

    RetrieveChapter(req.body.chapter)
        .then((content: any) => res.status(201).send(content))
        .catch((err: any) => res.status(500).send(err));
}

module.exports.getImage = async function (req: any, res: any) {
    res.setHeader("Content-Type", "image/jpg");

    RetrieveImage(req.body.image)
    .then((content: any) => res.status(201).send(content))
    .catch((err: any) => res.status(500).send(err));
}