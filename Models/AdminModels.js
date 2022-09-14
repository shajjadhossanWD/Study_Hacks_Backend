const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        avatar: {
            type: String,
        },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            default: "admin"
        },
        otp: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const model = mongoose.model("Admin", AdminSchema);
module.exports = model;
