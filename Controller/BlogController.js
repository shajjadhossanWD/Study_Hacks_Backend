const Blog = require("../Models/BlogModel");

exports.createBlogs = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const Blogs = new Blog({
                title: req.body.title,
                description: req.body.description,
                avatar: req.filename && path,
               
            });

            const saveData = await Blogs.save();
            res.status(201).json({
                newBlogs: {
                    _id: saveData._id,
                    title: saveData.title,
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



exports.getBlogsId = async (req, res) => {
    try {
        const Blogs = await Blog.findById(req.params.id);
        res.
            status(200).
            json({
                Blogs: {
                    _id: Blogs._id,
                    title: Blogs.title,
                    description: Blogs.description,
                    avatar: Blogs.avatar,
                },
            });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting data");
    }
}



exports.getAllBlogs = async (req, res) => {
    try {
        const Blogs = await Blog.find({});
        res.json(Blogs);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while getting all Blog");
    }
}

exports.updateBlogs = async (req, res) => {
    try {
        let path = "assets/" + req.filename;

            const data = {
                title: req.body.title,
                description: req.body.description,
                avatar: req.filename && path,
            };

            const options = { upsert: true, new: true };

            const saveData = await Blog.findByIdAndUpdate(req.params.id, data, options);

            res.status(200).json({
                Blogs: {
                    _id: saveData._id,
                    title: saveData.title,
                    description: saveData.description,
                    avatar: saveData.avatar,
                },
                message: "Blog has been updated",
            });
      
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("An error occurred while updating Blog");
    }
}


exports.deleteBlogs = async (req, res) => {
    try {
            const Blogs = await Blog.findById(req.params.id);

            await Blogs.remove();
            res.status(200).json({
                message: "Blog deleted successfully",
            });
        
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({
            message: "An error occurred while delete Blog",
        });
    }
}
