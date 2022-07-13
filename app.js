const express = require("express");
require("dotenv").config();
const users = require("./routs/users")

const app = express();

const PORT = process.env.PORT || 8000;

const logger = (req, res , next)=>{
    console.log(req.method);
    next();
}

app.use(logger);

app.use(express.json());
app.use("/api/users",users);

app.listen(PORT, () => console.log("server started on port " + PORT));
