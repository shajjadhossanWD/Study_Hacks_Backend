const Course = require("../Models/CoursesModel");

exports.createCourses = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const Courses = new Course({
                name: req.body.name,
                duration: req.body.duration,
                language: req.body.language,
                price: req.body.price,
                payLink: req.body.payLink,
                whatLearn: req.body.whatLearn,
                content: req.body.content,
                requirements: req.body.requirements,
                description: req.body.description,
                avatar: req.filename && path,
            });

            const saveData = await Courses.save();
            res.status(201).json({
                newCourses: {
                    _id: saveData._id,
                    name: saveData.name,
                    duration: saveData.duration,
                    language: saveData.language,
                    price: saveData.price,
                    payLink: saveData.payLink,
                    whatLearn: saveData.whatLearn,
                    requirements: saveData.requirements,
                    content: saveData.content,
                    description: saveData.description,
                    avatar: saveData.avatar,
                  
                },
                message: "Data created successfully.",
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while creating Data");
    }
}



exports.getCoursesId = async (req, res) => {
    try {
        const Courses = await Course.findById(req.params.id);
        res.
            status(200).
            json({
                Courses: {
                    _id: Courses._id,
                    name: Courses.name,
                    duration: Courses.duration,
                    language: Courses.language,
                    price: Courses.price,
                    payLink: Courses.payLink,
                    whatLearn: Courses.whatLearn,
                    requirements: Courses.requirements,
                    content: Courses.content,
                    description: Courses.description,
                    avatar: Courses.avatar,
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting data");
    }
}



exports.getAllCourses = async (req, res) => {
    try {
        const Courses = await Course.find({});
        res.json(Courses);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all Course");
    }
}

exports.updateCourses = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const data = {
                name: req.body.name,
                duration: req.body.duration,
                language: req.body.language,
                price: req.body.price,
                payLink: req.body.payLink,
                whatLearn: req.body.whatLearn,
                content: req.body.content,
                requirements: req.body.requirements,
                description: req.body.description,
                avatar: req.filename && path,
            };

            const options = { upsert: true, new: true };

            const saveData = await Course.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                Courses: {
                    _id: saveData._id,
                    name: saveData.name,
                    duration: saveData.duration,
                    language: saveData.language,
                    price: saveData.price,
                    payLink: saveData.payLink,
                    whatLearn: saveData.whatLearn,
                    requirements: saveData.requirements,
                    content: saveData.content,
                    description: saveData.description,
                    avatar: saveData.avatar,
                },
                message: "Course has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating Course");
    }
}


exports.deleteCourses = async (req, res) => {
    try {
            const Courses = await Course.findById(req.params.id);

            await Courses.remove();
            res.status(200).json({
                message: "Course deleted successfully",
            });
        
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete Course",
        });
    }
}
