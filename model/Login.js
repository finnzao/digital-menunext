import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        maxlength: 100
    },
    password:{
        type: String,
        required: true,
        maxlength: 100
    }
}, { timestamps: true })

export default mongoose.models.Login || mongoose.model("Login", ProductSchema);
//Verication if schema already exists 