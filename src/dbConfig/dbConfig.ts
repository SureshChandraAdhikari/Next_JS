import mongoose from "mongoose";

export async function connect () {
    try {
       await mongoose.connect(process.env.MONGO_URI! );
        console.log("MongoDB connected successfully");
        // const connection = mongoose.Connection
        // connection.on("connected", () =>{
        //     console.log("MongoDB Connected successfully")
        // })
    } catch (error) {
        console.log("Something went wrong");
        console.log(error)
    }
}