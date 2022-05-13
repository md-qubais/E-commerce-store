import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,  
        required:true,
    }
},{
    // when the user is created and when the user is updated
    timestamps:true,
})

const User=mongoose.model('User',userSchema);

export default User