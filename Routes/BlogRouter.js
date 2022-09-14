const router = require("express").Router();

const {
    createBlogs,
    getBlogsId,
    getAllBlogs,
    updateBlogs,
    deleteBlogs,
} = require("../Controller/BlogController");


const imageUpload = require("../Middleware/Upload");


router.post("/", imageUpload.single("image"), createBlogs);
router.get("/", getAllBlogs);
router.get("/:id", getBlogsId);
router.put("/update/:id", imageUpload.single("image"), updateBlogs);
router.delete("/:id", deleteBlogs);

module.exports = router;
