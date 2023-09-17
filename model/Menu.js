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
    category:{
        type:String,
        required:true,
        maxlength:30
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: [Number],// [ ] -> obh
        required: true
    },
    highlight:{
        type:Boolean,
        default:false,
    },
    state: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true })

export default mongoose.models.Products || mongoose.model("Products", ProductSchema);
//Verication if schema already exists 