const About = require("../Models/AboutModels");



exports.updateAbout = async (req, res) => {
    try {

        let path = "assets/" + req.filename;

        const about = new About({
            name: req.body.name,
            avatar: req.filename && path,
            aboutDescription: req.body.aboutDescription,
            title: req.body.title,
            companyDescription: req.body.companyDescription,
        });

            const options = { upsert: true, new: true };

            const aboutData = await About.findByIdAndUpdate(req.user._id, about, options);

            res.status(200).json({
                aboutD: {
                    _id: aboutData._id,
                    name: aboutData.name,
                    avatar: aboutData.avatar,
                    aboutDescription: aboutData.aboutDescription,
                    title: aboutData.title,
                    companyDescription: aboutData.companyDescription,
                },
                message: "About has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating about");
    }
}



exports.getAllAbout = async (req, res) => {
    try {
        const about = await About.find({});
        res.json(about);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all About");
    }
}


// exports.PostAbout = async (req, res) => {
//     try {
//             let path = "assets/" + req.filename;

//             const about = new About({
//                 name: req.body.name,
//                 avatar: req.filename && path,
//                 aboutDescription: req.body.aboutDescription,
//                 title: req.body.title,
//                 companyDescription: req.body.companyDescription,
//             });

//             const saveUser = await about.save();
//             res.status(201).json({
//                 newAbout: {
//                     _id: saveUser._id,
//                     name: saveUser.name,
//                     avatar: saveUser.avatar,
//                     aboutDescription: saveUser.aboutDescription,
//                     title: saveUser.title,
//                     companyDescription: saveUser.companyDescription,
//                 },
//                 message: "About posted successfully.",
//             });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json("An error occurred while posted About content");
//     }
// }

// exports.getAboutById = async (req, res) => {
//     try {
//         const about = await About.findById(req.params.id);
//         res.
//             status(200).
//             json({
//                 about: {
//                     _id: about._id,
//                     name: about.name,
//                     avatar: about.avatar,
//                     aboutDescription: about.aboutDescription,
//                     title: about.title,
//                     companyDescription: about.companyDescription,
//                 },
//             });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json("An error occurred while getting About");
//     }
// }

// exports.deleteAbout = async (req, res) => {
//     try {
//             const About = await About.findById(req.params.id);

//             await About.remove();
//             res.status(200).json({
//                 message: "About deleted successfully",
//             });
        
//     }
//     catch (e) {
//         console.log(e.message);
//         res.status(500).json({
//             message: "An error occurred while delete About",
//         });
//     }
// }
