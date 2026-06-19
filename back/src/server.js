import express, { json } from "express";
import cors from "cors";
import articleRouter from "./routes/articleRoutes.js";
import dotenv from "dotenv";
 
dotenv.config();
const app = express();


// Enable CORS for all routes and origins
app.use(cors());

// Enable json serialization
app.use(json());

app.use("/api/articles", articleRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});