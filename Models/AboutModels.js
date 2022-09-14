const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        avatar: {
            type: String,
        },
        aboutDescription: {
            type: String,
        },
        title: {
            type: String,
        },
        companyDescription: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("About", AboutSchema);
module.exports = model;
