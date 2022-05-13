import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb connected:${conn.connection.host}`)
    }catch(err){
        console.log('couldnt connect to your database')
        console.log(err)
        process.exit(1)
    }
}

export default connectDB;