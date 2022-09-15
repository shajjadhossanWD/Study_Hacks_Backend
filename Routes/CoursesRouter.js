const router = require("express").Router();

const {
    createCourses,
    getCoursesId,
    getAllCourses,
    updateCourses,
    deleteCourses,
} = require("../Controller/CoursesController");


const imageUpload = require("../Middleware/Upload");


router.post("/", imageUpload.single("image"), createCourses);
router.get("/", getAllCourses);
router.get("/:id", getCoursesId);
router.put("/update/:id", imageUpload.single("image"), updateCourses);
router.delete("/:id", deleteCourses);

module.exports = router;
























