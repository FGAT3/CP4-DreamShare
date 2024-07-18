const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");
const authRouter = require("./auth/router");
const articlesRouter = require("./articles/router");
const dreamsRouter = require("./dreams/router");
const commentsRouter = require("./comments/router");

router.use("/users", usersRouter);
router.use("/login", authRouter);
router.use("/dreams", dreamsRouter);
router.use("/comments", commentsRouter);
router.use("/articles", articlesRouter);

/* ************************************************************************* */

module.exports = router;
