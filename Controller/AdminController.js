const Admin = require("../Models/AdminModels");

exports.createAdmin = async (req, res) => {
    try {
        //  if (req.admin.role === "admin") {
            const query = { email: req.body.email };

            const result = await Admin.findOne(query);

            if (result) {
                return res.status(400).json({
                    message: "This email already exists",
                });
            }

            let path = "assets/" + req.filename;

            const admin = new Admin({
                name: req.body.name,
                avatar: req.filename && path,
                email: req.body.email,
                username: req.body.username,
                phone: req.body.phone,
                password: req.body.password,
            });

            const saveUser = await admin.save();
            res.status(201).json({
                newAdmin: {
                    _id: saveUser._id,
                    name: saveUser.name,
                    email: saveUser.email,
                    phone: saveUser.phone,
                    role: saveUser.role,
                    avatar: saveUser.avatar,
                    username: saveUser.username
                },
                message: "Admin created successfull.",
            });
        // }
        // else {
        //     res.status(400).json({
        //         message: "Unable to access add new admin"
        //     })
        // }
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while creating admin");
    }
}




exports.getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        res.
            status(200).
            json({
                admin: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    phone: admin.phone,
                    role: admin.role,
                    username: admin.username,
                    avatar: admin.avatar
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting admin");
    }
}


exports.getAllAdmin = async (req, res) => {
    try {
        const admin = await Admin.find({});
        res.json(admin);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all admin");
    }
}

exports.updateAdmin = async (req, res) => {
    try {

            let path = "assets/" + req.filename;

            const data = {
                name: req.body.name,
                avatar: req.filename && path,
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
            };

            const options = { upsert: true, new: true };

            const admin = await Admin.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                admin: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    phone: admin.phone,
                    username: admin.username,
                    avatar: admin.avatar,
                    password: admin.password,
                },
                message: "Admin has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating admin");
    }
}


exports.deleteAdmin = async (req, res) => {
    try {
        if (req.admin.role === "admin") {
            const admin = await Admin.findById(req.params.id);

            await admin.remove();
            res.status(200).json({
                message: "Admin deleted successfully",
            });
        }
        else {
            res.status(400).json({
                message: "Unable to access delete admin"
            })
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete admin",
        });
    }
}
