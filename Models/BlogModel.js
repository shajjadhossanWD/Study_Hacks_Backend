const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        
        description: {
            type: String,
        },
        title: {
            type: String,
        },
        avatar: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("Blog", BlogSchema);
module.exports = model;
