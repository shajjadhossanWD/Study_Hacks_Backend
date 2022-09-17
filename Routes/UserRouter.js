const router = require("express").Router();

const {
    createUsers,
    getUsersId,
    getAllUsers,
    updateUsers,
    deleteUsers,
} = require("../Controller/UserController");


const imageUpload = require("../Middleware/Upload");


router.post("/", imageUpload.single("image"), createUsers);
router.get("/", getAllUsers);
router.get("/:id", getUsersId);
router.put("/update/:id", imageUpload.single("image"), updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
























