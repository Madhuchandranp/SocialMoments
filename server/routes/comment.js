const express = require("express");
const router = express.Router({ mergeParams: true });
const CommentController = require("../controller/CommentController");
// comment
router.route("/").post(CommentController.createComment);
router.route("/:id").get(CommentController.getComments);

module.exports = router;
