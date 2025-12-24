const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Database connected...");
})
.catch((err)=>{console.log("Database connection error:", err);

});