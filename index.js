const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 5000;

app.use(express.json())

require("./config/database").connect();

// routes import and mount
const user = require("./routes/user");
app.use("/api/v1", user);


// activate the server
app.listen(PORT, ()=>{
    console.log(`app is running at ${PORT}`)
})