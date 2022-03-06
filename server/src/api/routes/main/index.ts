export {};

import { Router } from "express";
import { checkAuthenticated } from "../../middleware/check-auth";

const router = Router();

router
    .route("/chapter/get-content")
    .all(checkAuthenticated)
    .post(require("./chapter/chapter").getContent);

router
    .route("/chapter/get-image")
    .all(checkAuthenticated)
    .post(require("./chapter/chapter").getImage)

module.exports = router;