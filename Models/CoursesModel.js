const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        
        description: {
            type: String,
        },
        name: {
            type: String,
        },
        avatar: {
            type: String,
        },
        duration: {
            type: String,
        },
        language: {
            type: String,
        },
        price: {
            type: String,
        },
        payLink: {
            type: String,
        },
        whatLearn: {
            type: String,
        },
        content: {
            type: String,
        },
        requirements: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("course", CourseSchema);
module.exports = model;
