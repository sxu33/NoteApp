import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import noteRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"

import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()



const app = express();
const PORT = process.env.PORT || 5001




//middleware
app.use(express.json())
app.use(cors(
    {origin: "http://localhost:5173"}
))
app.use(rateLimiter)
app.use("/api/notes", noteRoutes)



connectDB().then(()=> app.listen(5001, ()=>{
    console.log("Server started on Port:", PORT,process.env.MONGO_URI);
  
}))


