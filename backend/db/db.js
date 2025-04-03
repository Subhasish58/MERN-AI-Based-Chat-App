import mongoose from "mongoose";
import dotenv from 'dotenv/config'

function connect() {
    console.log("MongoDB URI: ", process.env.MONGODB_URI);  // Check if URI is loaded properly
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=> {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.log(err);
        })
}

export default connect;