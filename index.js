//instantiation of server
const express= require('express');
const app = express();

//checking  port
require("dotenv").config();
const PORT= process.env.PORT || 3000;

//json parser
app.use(express.json());

//api mounting
const blogRoutes= require("./routes/blogRoutes");
app.use("/api/v1", blogRoutes)

//dbconnection
const connectWithDb= require("./config/database");
connectWithDb();

//running the app
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

app.get("/", (req, res)=>{
    res.send("Hey chicks! Life is fucked up.")
})