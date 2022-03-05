export {};

import { Router } from "express";

const router = Router();

router
    .route("/chapter/get-content")
    .post(require("./chapter/chapter").getContent);

router
    .route("/chapter/get-image")
    .post(require("./chapter/chapter").getImage)

module.exports = router;