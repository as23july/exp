const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbconnection");
const dotenv = require("dotenv").config();

connectDB()
const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use("/api/contacts", require("./rout/contactrout"));
app.use(errorhandler);

app.listen(port, () => {
    console.log(`server port ${port}`); 
});
