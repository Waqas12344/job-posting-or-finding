import cookieParser from "cookie-parser";
import express from "express"

import cors from 'cors'
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from './routes/companyRoute.js';
import jobRouter from './routes/jobRoute.js';
import applicationRoute from './routes/applicationRoute.js'
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;



// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:5173",
    Credential:true
}
app.use(cors(corsOptions));


//  api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRouter);
app.use("/api/v1/application",applicationRoute)

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"I am coming from backend",
        success:true
    })
})

app.listen(PORT,()=>{
    connectDB();
    console.log (`Server runing at port ${PORT}`)
})