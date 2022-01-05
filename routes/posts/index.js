const express = require("express");
const upload = require("../../module/multer");
const router = express.Router();
const postCtr = require("../../controller/postCtr");

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.get("/:id", postCtr.detail);

router.get("/update/:id", (req, res) => {
  res.render("update");
});

router.post("/", upload.single("image"), postCtr.upload);

module.exports = router;
