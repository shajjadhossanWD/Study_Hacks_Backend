const router = require("express").Router();

const { updateAbout, getAllAbout } = require("../Controller/AboutController");

const auth = require("../Middleware/AboutMiddleware");
const imageUpload = require("../Middleware/Upload");

router.post('/update', auth, imageUpload.single("image"), updateAbout);
router.post('/get', getAllAbout);

module.exports = router;