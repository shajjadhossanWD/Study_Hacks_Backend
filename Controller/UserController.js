const User = require("../Models/UserModels");

exports.createUsers = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const Users = new User({
                name: req.body.name,
                avatar: req.filename && path,
                email: req.body.email,
                phone: req.body.phone,
                courseName: req.body.courseName,
                date: req.body.date,
                location: req.body.location,
                duration: req.body.duration,
            });

            const saveData = await Users.save();
            res.status(201).json({
                newUsers: {
                    _id: saveData._id,
                    avatar: saveData.avatar,
                    name: saveData.name,
                    email: saveData.email,
                    phone: saveData.phone,
                    courseName: saveData.courseName,
                    date: saveData.date,
                    location: saveData.location,
                    duration: saveData.duration,
                  
                },
                message: "Data created successfully.",
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while creating Data");
    }
}



exports.getUsersId = async (req, res) => {
    try {
        const Users = await User.findById(req.params.id);
        res.
            status(200).
            json({
                Users: {
                    _id: saveData._id,
                    avatar: saveData.avatar,
                    name: saveData.name,
                    email: saveData.email,
                    phone: saveData.phone,
                    courseName: saveData.courseName,
                    date: saveData.date,
                    location: saveData.location,
                    duration: saveData.duration,
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting data");
    }
}



exports.getAllUsers = async (req, res) => {
    try {
        const Users = await User.find({});
        res.json(Users);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all User");
    }
}

exports.updateUsers = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const data = {
                name: req.body.name,
                avatar: req.filename && path,
                email: req.body.email,
                phone: req.body.phone,
                courseName: req.body.courseName,
                date: req.body.date,
                location: req.body.location,
                duration: req.body.duration,
            };

            const options = { upsert: true, new: true };

            const saveData = await User.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                Users: {
                    _id: saveData._id,
                    avatar: saveData.avatar,
                    name: saveData.name,
                    email: saveData.email,
                    phone: saveData.phone,
                    courseName: saveData.courseName,
                    date: saveData.date,
                    location: saveData.location,
                    duration: saveData.duration,
                },
                message: "User has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating User");
    }
}


exports.deleteUsers = async (req, res) => {
    try {
            const Users = await User.findById(req.params.id);

            await Users.remove();
            res.status(200).json({
                message: "User deleted successfully",
            });
        
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete User",
        });
    }
}
