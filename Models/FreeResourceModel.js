const mongoose = require("mongoose");

const ResourcesSchema = new mongoose.Schema(
    {
        
        description: {
            type: String,
        },
        title: {
            type: String,
        },
        vidLink: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("Resource", ResourcesSchema);
module.exports = model;
