import express from "express";
import router from "./src/routes/routes";
import createConnection from "./src/database/mongo.connection";
createConnection();
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());


app.listen(process.env.PORT,()=>{
     console.log("listning at the port 8002");
})

