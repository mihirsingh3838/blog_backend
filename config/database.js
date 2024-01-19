const mongoose= require('mongoose');

require("dotenv").config();

const connectWithDb= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Connected to database');
    })
    .catch((error)=>{
        console.log("DB Connection Issues");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports= connectWithDb;