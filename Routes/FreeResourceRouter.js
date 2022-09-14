const router = require("express").Router();

const {
    createResources,
    getResourcesId,
    getAllResources,
    updateResources,
    deleteResources,
} = require("../Controller/FreeResourceController");




router.post("/", createResources);
router.get("/", getAllResources);
router.get("/:id", getResourcesId);
router.put("/update/:id", updateResources);
router.delete("/:id", deleteResources);

module.exports = router;
