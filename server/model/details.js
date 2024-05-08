import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    enrollment:{
        type:String,
        required : true
    },

    password:{
        type:String,
        required: true
    },

    marks:{
        type: Number,
        required: true
    }
})


const detail = mongoose.model('Detail', detailsSchema);

export default detail;