const Publication = require("../Models/RecentPublicationModels");

exports.createPublications = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const Publications = new Publication({
                name: req.body.name,
                avatar: req.filename && path,
                designation: req.body.designation,
                getLink: req.body.getLink,
                scholarLink: req.body.scholarLink,
                title: req.body.title,
                authors: req.body.authors,
                publishDate: req.body.publishDate,
                publisher: req.body.publisher,
                description: req.body.description,
                articleLink: req.body.articleLink,
            });

            const saveData = await Publications.save();
            res.status(201).json({
                newPublications: {
                    _id: saveData._id,
                    name: saveData.name,
                    avatar: saveData.avatar,
                    designation: saveData.designation,
                    getLink: saveData.getLink,
                    scholarLink: saveData.scholarLink,
                    title: saveData.title,
                    authors: saveData.authors,
                    publishDate: saveData.publishDate,
                    publisher: saveData.publisher,
                    description: saveData.description,
                    articleLink: saveData.articleLink,
                  
                },
                message: "Data created successfully.",
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while creating Data");
    }
}



exports.getPublicationsId = async (req, res) => {
    try {
        const Publications = await Publication.findById(req.params.id);
        res.
            status(200).
            json({
                Publications: {
                    _id: saveData._id,
                    name: saveData.name,
                    avatar: saveData.avatar,
                    designation: saveData.designation,
                    getLink: saveData.getLink,
                    scholarLink: saveData.scholarLink,
                    title: saveData.title,
                    authors: saveData.authors,
                    publishDate: saveData.publishDate,
                    publisher: saveData.publisher,
                    description: saveData.description,
                    articleLink: saveData.articleLink,
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting data");
    }
}



exports.getAllPublications = async (req, res) => {
    try {
        const Publications = await Publication.find({});
        res.json(Publications);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all Publication");
    }
}

exports.updatePublications = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const data = {
                name: req.body.name,
                avatar: req.filename && path,
                designation: req.body.designation,
                getLink: req.body.getLink,
                scholarLink: req.body.scholarLink,
                title: req.body.title,
                authors: req.body.authors,
                publishDate: req.body.publishDate,
                publisher: req.body.publisher,
                description: req.body.description,
                articleLink: req.body.articleLink,
            };

            const options = { upsert: true, new: true };

            const saveData = await Publication.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                Publications: {
                    _id: saveData._id,
                    name: saveData.name,
                    avatar: saveData.avatar,
                    designation: saveData.designation,
                    getLink: saveData.getLink,
                    scholarLink: saveData.scholarLink,
                    title: saveData.title,
                    authors: saveData.authors,
                    publishDate: saveData.publishDate,
                    publisher: saveData.publisher,
                    description: saveData.description,
                    articleLink: saveData.articleLink,
                },
                message: "Publication has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating Publication");
    }
}


exports.deletePublications = async (req, res) => {
    try {
            const Publications = await Publication.findById(req.params.id);

            await Publications.remove();
            res.status(200).json({
                message: "Publication deleted successfully",
            });
        
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete Publication",
        });
    }
}
