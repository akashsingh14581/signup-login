const mongoose = require("mongoose");
require("dotenv").config();


exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log("db connect successfully")})
    .catch((error)=>{
        console.log("db connection failed", error);
        console.error(error);
        process.exit(1);
    })
}
