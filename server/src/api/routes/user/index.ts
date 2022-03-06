export {};

import { Router } from "express";
import { checkNotAuthenticated } from "../../middleware/check-auth";

const router = Router();

router
    .route("/login")
    .all(checkNotAuthenticated)
    .post(require("./login"));

router
    .route("/signup")
    .all(checkNotAuthenticated)
    .post(require("./signup"))

module.exports = router;