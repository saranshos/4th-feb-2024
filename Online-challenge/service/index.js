import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import Database from "./src/config/database.js";
import mainRouter from "./src/router/main.router.js";

dotenv.config();
const app = express();
const { PORT = 3001, MONGO_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());

const db = new Database(MONGO_URL);
db.open();

app.use("/api", mainRouter);

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
