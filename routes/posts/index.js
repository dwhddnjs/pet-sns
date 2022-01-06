const express = require("express");
const upload = require("../../module/multer");
const router = express.Router();
const postCtr = require("../../controller/postCtr");

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.get("/:id", postCtr.detail);

router.get("/update/:id", postCtr.updateLayout);

router.post("/", upload.single("image"), postCtr.upload);

router.post("/update/:id", postCtr.update);

router.post("/delete/:id", postCtr.delete);

module.exports = router;
