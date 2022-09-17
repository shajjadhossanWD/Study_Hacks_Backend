const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        
        name: {
            type: String,
        },
        avatar: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        courseName: {
            type: String,
        },
        date: {
            type: String,
        },
        location: {
            type: String,
        },
        duration: {
            type: String,
        },
       
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("user", UserSchema);
module.exports = model;
