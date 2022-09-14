const router = require("express").Router();

const {
    createAdmin,
    getAdmin,
    getAllAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../Controller/AdminController");


const auth = require("../Middleware/AdminAuthMiddleware");
const imageUpload = require("../Middleware/Upload");


router.post("/", auth, imageUpload.single("image"), createAdmin);
router.get("/", getAllAdmin);
router.get("/:id", getAdmin);
router.put("/update/:id", auth, imageUpload.single("image"), updateAdmin);
router.delete("/:id", auth, deleteAdmin);

module.exports = router;
