const router = require("express").Router();

const {
    createPublications,
    getPublicationsId,
    getAllPublications,
    updatePublications,
    deletePublications,
} = require("../Controller/RecentPublicationController");


const imageUpload = require("../Middleware/Upload");


router.post("/", imageUpload.single("image"), createPublications);
router.get("/", getAllPublications);
router.get("/:id", getPublicationsId);
router.put("/update/:id", imageUpload.single("image"), updatePublications);
router.delete("/:id", deletePublications);

module.exports = router;
























