const mongoose = require("mongoose");

const upcomingCourseSchema = new mongoose.Schema(
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
        publishDate: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("upcomingCourse", upcomingCourseSchema);
module.exports = model;
