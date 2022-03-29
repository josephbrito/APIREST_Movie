require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import Logger from "../config/logger";
import morganMid from "./middleware/morganMid";
import { connectdb } from "../config/db";
const app = express();

app.use(morganMid);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = config.get<number>("PORT");
app.listen(PORT, async () => {
  await connectdb();
  Logger.info(`Server running at port ${PORT}`);
});
