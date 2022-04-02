export {};

import { Router } from "express";
import { checkAuthenticated } from "../../middleware/check-auth";

const router = Router();

router
    .route("/chapter/get-content")
    .all(checkAuthenticated)
    .get(require("./chapter/chapter").getContent);

router
    .route("/chapter/get-image")
    .all(checkAuthenticated)
    .get(require("./chapter/chapter").getImage)

router
    .route("/chapter/set-questions")
    .all(checkAuthenticated)
    .post(require("./chapter/chapter").setQuestions)

router
    .route("/chapter/get-questions")
    .all(checkAuthenticated)
    .get(require("./chapter/chapter").getQuestions)

router
    .route("/chapter/add-chapter-test")
    .all(checkAuthenticated)
    .post(require("./chapter/chapter").addChapterTest)

router
    .route("/chapter/remove-chapter-test")
    .all(checkAuthenticated)
    .post(require("./chapter/chapter").removeChapterTest)

module.exports = router;