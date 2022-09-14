const Resource = require("../Models/FreeResourceModel");

exports.createResources = async (req, res) => {
    try {
            const resources = new Resource({
                title: req.body.title,
                description: req.body.description,
                vidLink: req.body.vidLink,
               
            });

            const saveData = await resources.save();
            res.status(201).json({
                newResources: {
                    _id: saveData._id,
                    title: saveData.title,
                    description: saveData.description,
                    vidLink: saveData.vidLink,
                  
                },
                message: "Data created successfully.",
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while creating Data");
    }
}



exports.getResourcesId = async (req, res) => {
    try {
        const resources = await Resource.findById(req.params.id);
        res.
            status(200).
            json({
                resources: {
                    _id: resources._id,
                    title: resources.title,
                    description: resources.description,
                    vidLink: resources.vidLink,
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting data");
    }
}



exports.getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find({});
        res.json(resources);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all Resource");
    }
}

exports.updateResources = async (req, res) => {
    try {

            const data = {
                title: req.body.title,
                description: req.body.description,
                vidLink: req.body.vidLink,
            };

            const options = { upsert: true, new: true };

            const saveData = await Resource.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                resources: {
                    _id: saveData._id,
                    title: saveData.title,
                    description: saveData.description,
                    vidLink: saveData.vidLink,
                },
                message: "Resource has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating Resource");
    }
}


exports.deleteResources = async (req, res) => {
    try {
            const resources = await Resource.findById(req.params.id);

            await resources.remove();
            res.status(200).json({
                message: "Resource deleted successfully",
            });
        
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete Resource",
        });
    }
}
