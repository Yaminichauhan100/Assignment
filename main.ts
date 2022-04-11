import express from "express";
import router from "./src/routes/user.routes";
import createConnection from "./src/connection/user.connection";
createConnection();
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
 const PORT = String(process.env.PORT);
// console.log(port);
// const PORT = 8000;

app.use('/',router);
app.listen(PORT,()=>{
  console.log("listning at the port 8000");
})
