import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 30
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: [Number],// [ ] -> to especific
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.models.Products || mongoose.model("Products", ProductSchema);
//Verication if schema already exists 