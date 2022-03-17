export {};

import { Router } from "express";
import { checkAuthenticated, checkNotAuthenticated } from "../../middleware/check-auth";

const router = Router();

router
    .route("/login")
    .all(checkNotAuthenticated)
    .post(require("./login"));

router
    .route("/signup")
    .all(checkNotAuthenticated)
    .post(require("./signup"))

router
    .route("/get-chapter-info")
    .all(checkAuthenticated)
    .post(require("./chapter").getChapterInfo)

router
    .route("/set-current-chapter")
    .all(checkAuthenticated)
    .post(require("./chapter").setCurrentChapter)

router
    .route("/set-current-part")
    .all(checkAuthenticated)
    .post(require("./chapter").setCurrentPart)

router
    .route("/check-token-status")
    .post(require("./data").checkTokenStatus)

module.exports = router;