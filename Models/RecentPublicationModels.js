const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema(
    {
        
        description: {
            type: String,
        },
        title: {
            type: String,
        },
        authors: {
            type: String,
        },
        publishDate: {
            type: String,
        },
        publisher: {
            type: String,
        },
        articleLink: {
            type: String,
        },
        designation: {
            type: String,
        },
        getLink: {
            type: String,
        },
        scholarLink: {
            type: String,
        },
        name: {
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

const model = mongoose.model("publication", PublicationSchema);
module.exports = model;
